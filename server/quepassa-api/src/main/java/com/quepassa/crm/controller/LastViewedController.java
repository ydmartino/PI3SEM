package com.quepassa.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quepassa.crm.model.LastViewed;

import com.quepassa.crm.repository.LastViewedRepository;


@RestController
@RequestMapping("/LastViewed")
public class LastViewedController {

    @Autowired
    private LastViewedRepository lastViewedRepository;

    @GetMapping
    public List<LastViewed> listLastVieweds(){
        return lastViewedRepository.findAll();
    }

}
