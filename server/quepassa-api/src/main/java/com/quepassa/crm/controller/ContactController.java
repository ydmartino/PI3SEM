package com.quepassa.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.quepassa.crm.service.LoginDTO;


@RestController
@RequestMapping("/Contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    public ContactController (ContactService contactService){
        this.contactService = contactService;
    }

    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = {"Content-Type", "Authorization"}, exposedHeaders = "Authorization", maxAge = 3600)
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Contacts> add(@RequestBody CreateContactDTO createContactDTO){
        HttpHeaders headers = new HttpHeaders();
        contactService.createContact(createContactDTO);

        return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(null);
    }

    @PostMapping("/Login")
    public ResponseEntity<Object> login(@RequestBody LoginDTO loginDTO){
        String userId = contactService.validateLogin(loginDTO);
        if (userId != null){
            LoginResponse response = new LoginResponse("login successful", userId);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    public static class LoginResponse {
        private String message;
        private String userId;
    
        public LoginResponse(String message, String userId) {
            this.message = message;
            this.userId = userId;
        }
    
        public String getMessage() {
            return message;
        }
    
        public String getUserId() {
            return userId;
        }
    }

    @GetMapping("/All")
    public List<Contacts> getAllContacts() {
        return contactService.getAllContacts();
    }
    

}
