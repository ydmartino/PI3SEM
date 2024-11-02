package com.quepassa.crm.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Objects;

@Entity
public class MessageHistory {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)//delegate to DB the responsability to increment ID number
    private String id;
    @Column(nullable = false)
    private String message;
    @Column(nullable = false)
    private String dateTime;
    @Column(nullable = false)
    private String fromId;
    @Column(nullable = false)
    private String toId;


    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDateTime() {
        return this.dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public String getFromId() {
        return this.fromId;
    }

    public void setFromId(String fromId) {
        this.fromId = fromId;
    }

    public String getToId() {
        return this.toId;
    }

    public void setToId(String toId) {
        this.toId = toId;
    }


}
