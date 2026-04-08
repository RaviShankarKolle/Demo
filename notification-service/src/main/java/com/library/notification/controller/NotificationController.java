package com.library.notification.controller;

import com.library.notification.dto.RegistrationNotificationRequest;
import com.library.notification.service.EmailNotificationService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/notifications")
public class NotificationController {

    private final EmailNotificationService emailNotificationService;

    public NotificationController(EmailNotificationService emailNotificationService) {
        this.emailNotificationService = emailNotificationService;
    }

    @PostMapping("/registration")
    public ResponseEntity<Void> sendRegistrationNotification(@Valid @RequestBody RegistrationNotificationRequest request) {
        emailNotificationService.sendRegistrationEmail(request);
        return ResponseEntity.accepted().build();
    }
}
