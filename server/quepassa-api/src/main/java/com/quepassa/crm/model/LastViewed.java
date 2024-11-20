package com.quepassa.crm.model;

import java.io.Serializable;
import java.time.Instant;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;

@Entity(name = "LastViewed") //Entity name
@IdClass(PKLastViewed.class) //Composite Primary Key of LastViewed object will be verified using the PKLastViewed class
public class LastViewed implements Serializable{
    
    @Id //Primary Key
    @Column(nullable = false) //Not Null
    private String fromIdUser;
    @Id //The other Primary Key
    @Column(nullable = false)
    private Instant toIdUser;
    @Column(nullable = false)
    private Instant dateTime;

    public String getFromIdUser() {
        return this.fromIdUser;
    }

    public void setFromIdUser(String fromIdUser) {
        this.fromIdUser = fromIdUser;
    }

    public Instant getToIdUser() {
        return this.toIdUser;
    }

    public void setToIdUser(Instant toIdUser) {
        this.toIdUser = toIdUser;
    }

    public Instant getDateTime() {
        return this.dateTime;
    }

    public void setDateTime(Instant dateTime) {
        this.dateTime = dateTime;
    }

    //Hashcode and Equals

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((fromIdUser == null) ? 0 : fromIdUser.hashCode());
        result = prime * result + ((toIdUser == null) ? 0 : toIdUser.hashCode());
        result = prime * result + ((dateTime == null) ? 0 : dateTime.hashCode());
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
        LastViewed other = (LastViewed) obj;
        if (fromIdUser == null) {
            if (other.fromIdUser != null)
                return false;
        } else if (!fromIdUser.equals(other.fromIdUser))
            return false;
        if (toIdUser == null) {
            if (other.toIdUser != null)
                return false;
        } else if (!toIdUser.equals(other.toIdUser))
            return false;
        if (dateTime == null) {
            if (other.dateTime != null)
                return false;
        } else if (!dateTime.equals(other.dateTime))
            return false;
        return true;
    }

    

}
