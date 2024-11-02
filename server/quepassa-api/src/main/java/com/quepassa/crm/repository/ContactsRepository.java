package com.quepassa.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quepassa.crm.model.Contacts;

@Repository
public interface ContactsRepository extends JpaRepository<Contacts, String>{

}
