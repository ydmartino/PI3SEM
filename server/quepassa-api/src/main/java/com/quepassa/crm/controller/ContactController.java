package com.quepassa.crm.controller;

import org.springframework.http.HttpHeaders;
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

    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = {"Content-Type", "Authorization"}, exposedHeaders = "Authorization", maxAge = 3600)
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Contacts> add(@RequestBody CreateContactDTO createContactDTO){
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Get-Header", "Access-Control-Allow-Origin");
        contactService.createContact(createContactDTO);
        return ResponseEntity.ok().headers(headers).body(null);
    }

    @GetMapping
    public ResponseEntity<Contacts> getContactName(@PathVariable("contactName") String name) {
        
        return null;

	}

}
