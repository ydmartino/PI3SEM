package com.quepassa.crm.service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

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

    public String getUserIdByUsername(String username) {
        System.out.println(username);
        return contactsRepository.findByName(username)
            .map(contact -> String.valueOf(contact.getId())) // Obtém o ID do usuário
            .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado: " + username));
    }
    public Optional<Contacts> getUserById(UUID userId) {
        return contactsRepository.findById(userId);  // Busca o usuário diretamente pelo ID (UUID).
    }

    public String validateLogin(LoginDTO loginDTO){
        
        Optional<Contacts> contactOpt = contactsRepository.findByName(loginDTO.name());
        if (contactOpt.isPresent() && contactOpt.get().getPassword().equals(loginDTO.password())) {
            return contactOpt.get().getId().toString(); // Retorna o ID
        }
        else return null; // Retorna null se as credenciais forem inválidas
        

    }
    
    public List<Contacts> getAllContacts(){

        return contactsRepository.findAll();

    }

}
