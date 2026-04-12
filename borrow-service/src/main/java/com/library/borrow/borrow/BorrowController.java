package com.library.borrow.borrow;

import com.library.borrow.common.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import static com.library.borrow.borrow.BorrowDtos.*;

@RestController
@RequestMapping("/api/v1/borrows")
public class BorrowController {
    private final BorrowService borrowService;

    public BorrowController(BorrowService borrowService) {
        this.borrowService = borrowService;
    }

    @PostMapping
    public CompletableFuture<ResponseEntity<ApiResponse<BorrowResponse>>> create(@Valid @RequestBody BorrowRequest request) {
        return borrowService.createBorrowAsync(request)
                .thenApply(response -> ResponseEntity.accepted()
                        .body(ApiResponse.success(response, Map.of("message", "Borrow request accepted."))));
    }

    @PostMapping("/{borrowId}/allocate")
    public ResponseEntity<ApiResponse<BorrowResponse>> allocate(
            @PathVariable Long borrowId,
            @Valid @RequestBody AllocateRequest request) {
        return ResponseEntity.ok(ApiResponse.success(borrowService.allocate(borrowId, request), Map.of("message", "Borrow allocated.")));
    }

    @PostMapping("/{borrowId}/return")
    public CompletableFuture<ResponseEntity<ApiResponse<BorrowResponse>>> returnBook(@PathVariable Long borrowId) {
        return borrowService.returnBookAsync(borrowId)
                .thenApply(response -> ResponseEntity.accepted()
                        .body(ApiResponse.success(response, Map.of("message", "Borrow return accepted."))));
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<ApiResponse<BorrowListResponse>> listByUser(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(ApiResponse.success(borrowService.listByUser(userId, page, size), Map.of()));
    }

    @GetMapping("/internal/overdue")
    public ResponseEntity<List<OverdueBorrowResponse>> listOverdueForFine() {
        return ResponseEntity.ok(borrowService.listOverdueForFineCalculation());
    }
}
