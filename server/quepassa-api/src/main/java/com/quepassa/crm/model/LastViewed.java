package com.quepassa.crm.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;

@Entity(name = "LastViewed")
@IdClass(PKLastViewed.class)
public class LastViewed implements Serializable{
    
    @Id
    @Column(nullable = false)
    private int fromIdUser;
    @Id
    @Column(nullable = false)
    private int toIdUser;
    @Column(nullable = false)
    private String dateTime;

    public int getFromIdUser() {
        return this.fromIdUser;
    }

    public void setFromIdUser(int fromIdUser) {
        this.fromIdUser = fromIdUser;
    }

    public int getToIdUser() {
        return this.toIdUser;
    }

    public void setToIdUser(int toIdUser) {
        this.toIdUser = toIdUser;
    }

    public String getDateTime() {
        return this.dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + fromIdUser;
        result = prime * result + toIdUser;
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
        if (fromIdUser != other.fromIdUser)
            return false;
        if (toIdUser != other.toIdUser)
            return false;
        return true;
    }

    

}
