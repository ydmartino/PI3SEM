package com.quepassa.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quepassa.crm.model.MessageHistory;

import com.quepassa.crm.repository.MessageHistoryRepository;


@RestController
@RequestMapping("/MessageHistory")
public class MessageHistoryController {

    @Autowired
    private MessageHistoryRepository messageHistoryRepository;

    @GetMapping
    public List<MessageHistory> listMessageHistory(){
        return messageHistoryRepository.findAll();
    }
}
