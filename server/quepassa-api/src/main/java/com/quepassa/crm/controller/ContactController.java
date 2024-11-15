package com.quepassa.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.quepassa.crm.model.Contacts;
import com.quepassa.crm.repository.ContactsRepository;



@RestController
@RequestMapping("/Contacts")
public class ContactController {
    


    @Autowired
    private ContactsRepository contactsRepository;
    
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public List<Contacts> contactTeste(@RequestParam(required = false, defaultValue = "World") String name) {
		System.out.println("Ola Mundo!");
        return contactsRepository.findAll();
	}

    @GetMapping("/Contact-javaconfig")
    public List<Contacts> contactTesteJavaconfig(@RequestParam(required = false, defaultValue = "World") String param) {
        return contactsRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Contacts add(@RequestBody Contacts contacts){

        return contactsRepository.save(contacts);

    }
    

    
    /*@GetMapping
    public List<Contacts> listContacts(){
        return contactsRepository.findAll();
    }*/
}
