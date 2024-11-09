package com.quepassa.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quepassa.crm.model.Contacts;

import com.quepassa.crm.repository.ContactsRepository;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/Contacts")
public class ContactController {
    
    @Autowired
    private ContactsRepository contactsRepository;
    
    @GetMapping
    public Contacts greetingWithJavaConfig(@RequestParam(required = false, defaultValue = "World") String name) {
		System.out.println("Ola Mundo!");
        return new Contacts();
	}

    
    /*@GetMapping
    public List<Contacts> listContacts(){
        return contactsRepository.findAll();
    }*/
}
