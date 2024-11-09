package com.quepassa.crm.model;

import java.io.Serializable;
import java.util.Objects;

public class PKLastViewed implements Serializable {

    private int fromIdUser;
    private int toIdUser;

    public PKLastViewed(int fromIdUser, int toIdUser){
        this.fromIdUser = fromIdUser;
        this.toIdUser = toIdUser;
    }

    public PKLastViewed(){

    }

    public int getfromIdUser() {
        return fromIdUser;
    }

    public void setfromIdUser(int fromIdUser) {
        this.fromIdUser = fromIdUser;
    }

    public int gettoIdUser() {
        return toIdUser;
    }

    public void settoIdUser(int toIdUser) {
        this.toIdUser = toIdUser;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o){
            return true;
        }
        if (o == null || getClass() != o.getClass()){
            return false;
        }
        PKLastViewed pk = (PKLastViewed) o;
        return Objects.equals(toIdUser, pk.toIdUser) && Objects.equals(fromIdUser, pk.fromIdUser);
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + fromIdUser;
        result = prime * result + toIdUser;
        return result;
    }
   

}
