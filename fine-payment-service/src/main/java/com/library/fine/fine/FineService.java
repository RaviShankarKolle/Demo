package com.library.fine.fine;

import com.library.fine.client.BorrowClient;
import com.library.fine.client.NotificationClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Map;

@Service
public class FineService {
    private static final Logger log = LoggerFactory.getLogger(FineService.class);
    private static final BigDecimal DAILY_FINE = new BigDecimal("2.50");
    private static final BigDecimal LOST_BOOK_FLAT_FINE = new BigDecimal("250.00");

    private final FineRepository fineRepository;
    private final BorrowClient borrowClient;
    private final NotificationClient notificationClient;
    private final KafkaTemplate<String, Object> kafkaTemplate;

    public FineService(FineRepository fineRepository,
                       BorrowClient borrowClient,
                       NotificationClient notificationClient,
                       KafkaTemplate<String, Object> kafkaTemplate) {
        this.fineRepository = fineRepository;
        this.borrowClient = borrowClient;
        this.notificationClient = notificationClient;
        this.kafkaTemplate = kafkaTemplate;
    }

    @Transactional
    public int recalculateOverdueFines() {
        List<BorrowClient.OverdueBorrowRecord> overdueBorrows = borrowClient.getOverdueBorrows();
        int updatedCount = 0;
        for (BorrowClient.OverdueBorrowRecord record : overdueBorrows) {
            long overdueDays = Math.max(1, ChronoUnit.DAYS.between(record.dueDate(), LocalDate.now()));
            BigDecimal amount = DAILY_FINE.multiply(BigDecimal.valueOf(overdueDays)).setScale(2, RoundingMode.HALF_UP);
            String reason = "Overdue fine: " + overdueDays + " day(s)";
            upsertFine(record.borrowId(), record.userId(), record.bookId(), amount, reason, "PENDING");
            updatedCount++;
        }
        return updatedCount;
    }

    @Transactional
    public FineDtos.FineResponse markLostBookFine(Long borrowId, Long userId, Long bookId) {
        return map(upsertFine(borrowId, userId, bookId, LOST_BOOK_FLAT_FINE, "Lost book fine", "PENDING"));
    }

    private FineRepository.FineRecord upsertFine(Long borrowId, Long userId, Long bookId, BigDecimal amount, String reason, String status) {
        FineRepository.FineRecord fine = fineRepository.findByBorrowId(borrowId)
                .map(existing -> {
                    fineRepository.updateFine(existing.id(), amount, reason, status, LocalDate.now());
                    return fineRepository.findById(existing.id()).orElseThrow();
                })
                .orElseGet(() -> {
                    Long id = fineRepository.create(borrowId, userId, bookId, amount, reason, status, LocalDate.now());
                    return fineRepository.findById(id).orElseThrow();
                });
        emitFineEvent("FINE_UPDATED", fine.id(), fine.userId(), fine.amount());
        notifyFineReminder(fine);
        return fine;
    }

    private void notifyFineReminder(FineRepository.FineRecord fine) {
        try {
            notificationClient.sendFineReminder(new NotificationClient.FineReminderRequest(
                    "user-" + fine.userId() + "@example.com",
                    "User " + fine.userId(),
                    fine.userId(),
                    fine.id(),
                    fine.amount(),
                    fine.reason()
            ));
        } catch (Exception ex) {
            log.warn("Failed to notify fine reminder for fineId {}: {}", fine.id(), ex.getMessage());
        }
    }

    private void emitFineEvent(String eventType, Long fineId, Long userId, BigDecimal amount) {
        Map<String, Object> payload = Map.of(
                "type", eventType,
                "fineId", fineId,
                "userId", userId,
                "amount", amount,
                "occurredAt", LocalDate.now().toString()
        );
        try {
            kafkaTemplate.send("fine-events", payload);
        } catch (Exception ex) {
            log.warn("Failed to publish Kafka fine event {}: {}", eventType, ex.getMessage());
        }
        log.info("Fine event emitted: {}", payload);
    }

    private FineDtos.FineResponse map(FineRepository.FineRecord r) {
        return new FineDtos.FineResponse(
                r.id(), r.borrowId(), r.userId(), r.bookId(), r.amount(), r.reason(), r.status(), r.lastCalculatedDate(), r.updatedAt()
        );
    }
}
