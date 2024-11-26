package com.quepassa.crm.model;

import java.io.Serializable;

public class PKLastViewed implements Serializable {

    private String fromIdUser;
    private String toIdUser;

    public PKLastViewed(String fromIdUser, String toIdUser){
        this.fromIdUser = fromIdUser;
        this.toIdUser = toIdUser;
    }

    public PKLastViewed(){

    }

    public String getfromIdUser() {
        return fromIdUser;
    }

    public void setfromIdUser(String fromIdUser) {
        this.fromIdUser = fromIdUser;
    }

    public String gettoIdUser() {
        return toIdUser;
    }

    public void settoIdUser(String toIdUser) {
        this.toIdUser = toIdUser;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((fromIdUser == null) ? 0 : fromIdUser.hashCode());
        result = prime * result + ((toIdUser == null) ? 0 : toIdUser.hashCode());
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
        PKLastViewed other = (PKLastViewed) obj;
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
        return true;
    }

    }
