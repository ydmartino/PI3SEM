package com.quepassa.crm.model;

import java.time.Instant;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Data;

@Data
@Entity
@Table(name="Contacts", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"id"}),
    @UniqueConstraint(columnNames = {"email"}),
    @UniqueConstraint(columnNames = {"name"})
})
public class Contacts{

    @Id //Identifies Primary Key in DB
    @GeneratedValue( strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)//States this field can not be Null
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private boolean isAdmin;

    @Column(nullable = false)
    private String email;
    
    @Column
    private String pfpimage;

    @CreationTimestamp
    private Instant creationTimestamp;
    @UpdateTimestamp
    private Instant updateTimestamp;


    //Constructors to framework to manage in runtime
    
    public Contacts(){

    }

    public Contacts(Instant creationTimestamp, String email, UUID id, boolean isAdmin, String name, String password, Instant updateTimestamp) {
        this.creationTimestamp = creationTimestamp;
        this.email = email;
        this.id = id;
        this.isAdmin = isAdmin;
        this.name = name;
        this.password = password;
        this.updateTimestamp = updateTimestamp;
    }
    
    //Getters and Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean isAdmin) {
        this.isAdmin = isAdmin;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Instant getCreationTimestamp() {
        return creationTimestamp;
    }

    public void setCreationTimestamp(Instant creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
    }

    public Instant getUpdateTimestamp() {
        return updateTimestamp;
    }

    public void setUpdateTimestamp(Instant updateTimestamp) {
        this.updateTimestamp = updateTimestamp;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((password == null) ? 0 : password.hashCode());
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + (isAdmin ? 1231 : 1237);
        result = prime * result + ((email == null) ? 0 : email.hashCode());
        result = prime * result + ((pfpimage == null) ? 0 : pfpimage.hashCode());
        result = prime * result + ((creationTimestamp == null) ? 0 : creationTimestamp.hashCode());
        result = prime * result + ((updateTimestamp == null) ? 0 : updateTimestamp.hashCode());
        return result;
    }
    
    //HashCodes

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Contacts other = (Contacts) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (password == null) {
            if (other.password != null)
                return false;
        } else if (!password.equals(other.password))
            return false;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        if (isAdmin != other.isAdmin)
            return false;
        if (email == null) {
            if (other.email != null)
                return false;
        } else if (!email.equals(other.email))
            return false;
        if (pfpimage == null) {
            if (other.pfpimage != null)
                return false;
        } else if (!pfpimage.equals(other.pfpimage))
            return false;
        if (creationTimestamp == null) {
            if (other.creationTimestamp != null)
                return false;
        } else if (!creationTimestamp.equals(other.creationTimestamp))
            return false;
        if (updateTimestamp == null) {
            if (other.updateTimestamp != null)
                return false;
        } else if (!updateTimestamp.equals(other.updateTimestamp))
            return false;
        return true;
    }


    public String getUsername() {
        return name;
    }

}