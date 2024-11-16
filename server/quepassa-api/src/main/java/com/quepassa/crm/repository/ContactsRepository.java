package com.quepassa.crm.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quepassa.crm.model.Contacts;

@Repository
public interface ContactsRepository extends JpaRepository<Contacts, UUID>{
    Optional<Contacts> findByEmail (String email);
    Optional<Contacts> findByName (String name);
    Optional<Contacts> findByEmailOrName (String email, String name);
    Boolean existsByName (String name);
    Boolean existsByEmail (String email);
}
