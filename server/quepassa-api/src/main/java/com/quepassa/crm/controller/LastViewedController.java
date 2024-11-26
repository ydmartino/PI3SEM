package com.quepassa.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quepassa.crm.model.LastViewed;
import com.quepassa.crm.service.LastViewedService;



@RestController
@RequestMapping("/LastViewed")
public class LastViewedController {

    @Autowired
    private LastViewedService lastViewedService;

    @PostMapping
    public ResponseEntity<LastViewed> saveLastViewed(@RequestBody LastViewed lastViewed) {
        return ResponseEntity.ok(lastViewedService.saveLastViewed(lastViewed));
    }
    
    @GetMapping
    public ResponseEntity<List<LastViewed>> getAllLastViewed() {
        return ResponseEntity.ok(lastViewedService.getAllLastViewed());
    }

}
