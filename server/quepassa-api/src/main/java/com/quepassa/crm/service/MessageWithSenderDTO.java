package com.quepassa.crm.service;

import java.time.Instant;
import java.util.UUID;

public class MessageWithSenderDTO {

    private int Id;
    private String message;
    private String fromName;
    private String toName;
    private Instant dateTime;
    private UUID fromId;
    private UUID toId;

    public MessageWithSenderDTO(int Id, String message, String fromName, String toName, Instant dateTime, UUID fromId, UUID toId) {
        this.Id = Id;
        this.message = message;
        this.fromName = fromName;
        this.toName = toName;
        this.dateTime = dateTime;
        this.fromId = fromId;
        this.toId = toId;
    }

    // Getters and setters

    public String getToName() {
        return toName;
    }

    public void setToName(String toName) {
        this.toName = toName;
    }

    public int getId() {
        return Id;
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

    public void setId(int Id) {
        this.Id = Id;
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
