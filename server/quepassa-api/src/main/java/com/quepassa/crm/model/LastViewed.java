package com.quepassa.crm.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.Objects;

@Entity
public class LastViewed {
    
    @Id
    @Column(nullable = false)
    private String fromIdUser;
    @Id
    @Column(nullable = false)
    private String toIdUser;
    @Column(nullable = false)
    private String dateTime;

    public String getFromIdUser() {
        return this.fromIdUser;
    }

    public void setFromIdUser(String fromIdUser) {
        this.fromIdUser = fromIdUser;
    }

    public String getToIdUser() {
        return this.toIdUser;
    }

    public void setToIdUser(String toIdUser) {
        this.toIdUser = toIdUser;
    }

    public String getDateTime() {
        return this.dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

}
