package com.quepassa.crm.service;

import java.time.Instant;
import java.util.UUID;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.quepassa.crm.model.Contacts;
import com.quepassa.crm.repository.ContactsRepository;


@Service
public class ContactService implements UserDetailsService {

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

    @Override
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException{
        Contacts contact = contactsRepository.findByEmailOrName(usernameOrEmail, usernameOrEmail).orElseThrow(() -> new UsernameNotFoundException("User not found with username or email: " + usernameOrEmail));
        return new org.springframework.security.core.userdetails.User(contact.getEmail(),contact.getPassword(),contact.getAuthorities());
    }

}
