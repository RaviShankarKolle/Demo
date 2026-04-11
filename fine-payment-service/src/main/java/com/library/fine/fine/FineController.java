package com.library.fine.fine;

import com.library.fine.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/fines")
public class FineController {
    private final FineService fineService;

    public FineController(FineService fineService) {
        this.fineService = fineService;
    }

    @PostMapping("/recalculate")
    public ResponseEntity<ApiResponse<Map<String, Object>>> recalculate() {
        int updated = fineService.recalculateOverdueFines();
        return ResponseEntity.ok(ApiResponse.success(Map.of("updatedFines", updated), Map.of("message", "Fine recalculation complete.")));
    }

    @PostMapping("/lost/{borrowId}/users/{userId}/books/{bookId}")
    public ResponseEntity<ApiResponse<FineDtos.FineResponse>> markLost(
            @PathVariable Long borrowId,
            @PathVariable Long userId,
            @PathVariable Long bookId) {
        return ResponseEntity.ok(ApiResponse.success(
                fineService.markLostBookFine(borrowId, userId, bookId),
                Map.of("message", "Lost-book fine applied.")
        ));
    }
}
