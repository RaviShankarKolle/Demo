package com.library.fine.fine;

import com.library.fine.client.BorrowClient;
import com.library.fine.client.NotificationClient;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.kafka.core.KafkaTemplate;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class FineServiceTest {
    private FineRepository fineRepository;
    private BorrowClient borrowClient;
    private FineService fineService;

    @BeforeEach
    void setUp() {
        fineRepository = mock(FineRepository.class);
        borrowClient = mock(BorrowClient.class);
        fineService = new FineService(
                fineRepository,
                borrowClient,
                mock(NotificationClient.class),
                mock(KafkaTemplate.class)
        );
    }

    @Test
    void recalculateOverdueFines_returnsZeroWhenNoOverdues() {
        when(borrowClient.getOverdueBorrows()).thenReturn(List.of());
        assertEquals(0, fineService.recalculateOverdueFines());
    }

    @Test
    void recalculateOverdueFines_processesEachBorrow() {
        var overdue = new BorrowClient.OverdueBorrowRecord(1L, 2L, 3L, LocalDate.now().minusDays(2), "OVERDUE");
        when(borrowClient.getOverdueBorrows()).thenReturn(List.of(overdue));
        when(fineRepository.findByBorrowId(1L)).thenReturn(Optional.empty());
        when(fineRepository.create(eq(1L), eq(2L), eq(3L), any(BigDecimal.class), any(String.class), eq("PENDING"), any(LocalDate.class))).thenReturn(10L);
        when(fineRepository.findById(10L)).thenReturn(Optional.of(
                new FineRepository.FineRecord(10L, 1L, 2L, 3L, new BigDecimal("5.00"), "Overdue fine: 2 day(s)", "PENDING", LocalDate.now(), java.time.Instant.now())
        ));

        assertEquals(1, fineService.recalculateOverdueFines());
        verify(fineRepository).create(eq(1L), eq(2L), eq(3L), any(BigDecimal.class), any(String.class), eq("PENDING"), any(LocalDate.class));
    }
}
