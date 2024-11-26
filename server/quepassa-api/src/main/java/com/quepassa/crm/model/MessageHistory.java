package com.quepassa.crm.model;

import java.time.Instant;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "MessageHistory") //Entity Name
public class MessageHistory {

    @Id //Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY)//Delegate to DB the responsability to auto-increment ID number
    private int id;
   
    @Column(nullable = false)//Not Null
    private String message;
    @Column(nullable = false, name = "date_time")
    @CreationTimestamp
    private Instant dateTime;
    @Column(nullable = false, name = "from_id")
    private UUID fromId;
    @Column(nullable = false, name = "to_id")
    private UUID toId;
    @Column
    private String messageImage;


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

    public Instant getDateTime() {
        return this.dateTime;
    }

    public void setDateTime(Instant dateTime) {
        this.dateTime = Instant.now();
    }

    public UUID getFromId() {
        return this.fromId;
    }

    public void setFromId(UUID fromId) {
        this.fromId = fromId;
    }

    public UUID getToId() {
        return this.toId;
    }

    public void setToId(UUID toId) {
        this.toId = toId;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((message == null) ? 0 : message.hashCode());
        result = prime * result + ((dateTime == null) ? 0 : dateTime.hashCode());
        result = prime * result + ((fromId == null) ? 0 : fromId.hashCode());
        result = prime * result + ((toId == null) ? 0 : toId.hashCode());
        result = prime * result + ((messageImage == null) ? 0 : messageImage.hashCode());
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
        if (message == null) {
            if (other.message != null)
                return false;
        } else if (!message.equals(other.message))
            return false;
        if (dateTime == null) {
            if (other.dateTime != null)
                return false;
        } else if (!dateTime.equals(other.dateTime))
            return false;
        if (fromId == null) {
            if (other.fromId != null)
                return false;
        } else if (!fromId.equals(other.fromId))
            return false;
        if (toId == null) {
            if (other.toId != null)
                return false;
        } else if (!toId.equals(other.toId))
            return false;
        if (messageImage == null) {
            if (other.messageImage != null)
                return false;
        } else if (!messageImage.equals(other.messageImage))
            return false;
        return true;
    }

    public String getMessageImage() {
        return messageImage;
    }

    public void setMessageImage(String messageImage) {
        this.messageImage = messageImage;
    }


}
