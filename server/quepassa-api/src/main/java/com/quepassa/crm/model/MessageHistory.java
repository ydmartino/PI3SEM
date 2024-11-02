package com.quepassa.crm.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "MessageHistory")
public class MessageHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//delegate to DB the responsability to increment ID number
    private int id;
   



    @Column(nullable = false)
    private String message;
    @Column(nullable = false)
    private String dateTime;
    @Column(nullable = false)
    private int fromId;
    @Column(nullable = false)
    private int toId;


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
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

    public int getFromId() {
        return this.fromId;
    }

    public void setFromId(int fromId) {
        this.fromId = fromId;
    }

    public int getToId() {
        return this.toId;
    }

    public void setToId(int toId) {
        this.toId = toId;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        MessageHistory other = (MessageHistory) obj;
        if (id != other.id)
            return false;
        return true;
    }


}
