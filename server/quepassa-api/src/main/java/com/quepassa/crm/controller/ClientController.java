package com.quepassa.crm.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quepassa.crm.model.Contacts;


@RestController
@RequestMapping("/Contacts")
public class ClientController {
    
    @GetMapping
    public List<Contacts> list(){
        
    }
}
