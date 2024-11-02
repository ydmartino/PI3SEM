package com.quepassa.crm.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/Clients")
public class ClientController {
    
    @GetMapping
    public String hello(){
        return "Olá mundo";
    }
}
