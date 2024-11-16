package com.quepassa.crm.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.quepassa.crm.model.Contacts;
import com.quepassa.crm.service.ContactService;
import com.quepassa.crm.service.CreateContactDTO;


@RestController
@RequestMapping("/Contacts")
public class ContactController {
    

    private ContactService contactService;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Contacts> add(@RequestBody CreateContactDTO createContactDTO){
        contactService.createContact(createContactDTO);
        return null;

    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public ResponseEntity<Contacts> getContactName(@PathVariable("contactName") String name) {
        
        return null;

	}

}
