package com.library.borrow.borrow;

import com.library.borrow.client.BookClient;
import com.library.borrow.client.NotificationClient;
import com.library.borrow.client.UserClient;
import com.library.borrow.exception.ApplicationException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.mock;

class BorrowServiceTest {
    private BorrowService borrowService;

    @BeforeEach
    void setUp() {
        borrowService = new BorrowService(
                mock(BorrowRepository.class),
                mock(UserClient.class),
                mock(BookClient.class),
                mock(NotificationClient.class),
                mock(org.springframework.context.ApplicationEventPublisher.class)
        );
    }

    @Test
    void createBorrow_shouldRejectInvalidDateWindow() {
        BorrowDtos.BorrowRequest request = new BorrowDtos.BorrowRequest(
                1L, 10L, LocalDate.now().plusDays(5), LocalDate.now().plusDays(5)
        );
        ApplicationException ex = assertThrows(ApplicationException.class, () -> borrowService.createBorrow(request));
        assertEquals("INVALID_BORROW_WINDOW", ex.getCode());
    }

    @Test
    void createBorrow_shouldRejectDurationBeyondLimit() {
        BorrowDtos.BorrowRequest request = new BorrowDtos.BorrowRequest(
                1L, 10L, LocalDate.now(), LocalDate.now().plusDays(16)
        );
        ApplicationException ex = assertThrows(ApplicationException.class, () -> borrowService.createBorrow(request));
        assertEquals("BORROW_DURATION_EXCEEDED", ex.getCode());
    }
}
