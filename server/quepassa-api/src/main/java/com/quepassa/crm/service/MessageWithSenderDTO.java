package com.quepassa.crm.service;

import java.time.Instant;
import java.util.UUID;

public class MessageWithSenderDTO {

    private int messageId;
    private String message;
    private String fromName;
    private Instant dateTime;
    private UUID fromId;
    private UUID toId;

    public MessageWithSenderDTO(int messageId, String message, String fromName, Instant dateTime, UUID fromId, UUID toId) {
        this.messageId = messageId;
        this.message = message;
        this.fromName = fromName;
        this.dateTime = dateTime;
        this.fromId = fromId;
        this.toId = toId;
    }

    // Getters and setters

    public int getMessageId() {
        return messageId;
    }

    public UUID getFromId() {
        return fromId;
    }

    public void setFromId(UUID fromId) {
        this.fromId = fromId;
    }

    public UUID getToId() {
        return toId;
    }

    public void setToId(UUID toId) {
        this.toId = toId;
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
