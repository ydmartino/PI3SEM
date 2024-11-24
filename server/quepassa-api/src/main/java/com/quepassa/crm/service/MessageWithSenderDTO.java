package com.quepassa.crm.service;

import java.time.Instant;

public class MessageWithSenderDTO {

    private int messageId;
    private String message;
    private String fromName;
    private Instant dateTime;

    public MessageWithSenderDTO(int messageId, String message, String fromName, Instant dateTime) {
        this.messageId = messageId;
        this.message = message;
        this.fromName = fromName;
        this.dateTime = dateTime;
    }

    // Getters and setters

    public int getMessageId() {
        return messageId;
    }

    public void setMessageId(int messageId) {
        this.messageId = messageId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getFromName() {
        return fromName;
    }

    public void setFromName(String fromName) {
        this.fromName = fromName;
    }

    public Instant getDateTime() {
        return dateTime;
    }

    public void setDateTime(Instant dateTime) {
        this.dateTime = dateTime;
    }

}
