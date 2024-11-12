package com.quepassa.crm.service;

import java.time.Instant;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.quepassa.crm.controller.CreateContactDTO;
import com.quepassa.crm.model.Contacts;
import com.quepassa.crm.repository.ContactsRepository;


@Service
public class ContactService {

    //Dependence Injection
    private ContactsRepository contactsRepository;

    public ContactService(ContactsRepository contactsRepository){
        this.contactsRepository = contactsRepository;
    }

    public UUID createContact(CreateContactDTO createContactDTO){
        // DTO -> ENTITY
        
        var entity = new Contacts(
            Instant.now(),
            createContactDTO.email(),
            UUID.randomUUID(),
            createContactDTO.isAdmin(),
            createContactDTO.name(),
            createContactDTO.password(),
            null
        );

        var contactSaved = contactsRepository.save(entity);
        return contactSaved.getId();
    }

}
