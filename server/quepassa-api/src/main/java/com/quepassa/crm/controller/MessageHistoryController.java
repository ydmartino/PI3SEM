package com.quepassa.crm.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quepassa.crm.model.MessageHistory;
import com.quepassa.crm.service.MessageHistoryService;
import com.quepassa.crm.service.MessageWithSenderDTO;




@RestController
@RequestMapping("/MessageHistory")
public class MessageHistoryController {

    private final MessageHistoryService messageHistoryService;

    public MessageHistoryController(MessageHistoryService messageHistoryService){
        this.messageHistoryService = messageHistoryService;
    }

    @PostMapping
    public ResponseEntity<MessageHistory> saveMessage(@RequestBody MessageHistory messageHistory) {
        return ResponseEntity.ok(messageHistoryService.saveMessage(messageHistory));
        
    }

    @GetMapping("/User/{userId}/RecentMessages")
    public List<MessageWithSenderDTO> getRecentMessagesForUser(@PathVariable UUID userId) {
        return messageHistoryService.getRecentMessagesForUser(userId);
    }
        
    
    @GetMapping("/Conversation/{userId1}/{userId2}")
    public ResponseEntity<List<MessageHistory>> getMessagesBetweenUsers(
        @PathVariable UUID userId1, 
        @PathVariable UUID userId2) {
        
        List<MessageHistory> messages = messageHistoryService.getMessagesBetweenUsers(userId1, userId2);
        return ResponseEntity.ok(messages);
    }
    
}