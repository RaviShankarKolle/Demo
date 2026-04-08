package com.library.notification.service;

import com.library.notification.dto.RegistrationNotificationRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailNotificationService {

    private static final Logger log = LoggerFactory.getLogger(EmailNotificationService.class);
    private final JavaMailSender mailSender;

    public EmailNotificationService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendRegistrationEmail(RegistrationNotificationRequest request) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(request.email());
            message.setSubject("Welcome to Library Management");
            message.setText("Hi " + request.name() + ",\n\nYour account has been created successfully.");
            mailSender.send(message);
        } catch (Exception ex) {
            // Keep registration flow resilient even if SMTP is not configured yet.
            log.warn("Unable to send registration email to {}: {}", request.email(), ex.getMessage());
        }
    }
}
