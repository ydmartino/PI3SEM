package com.quepassa.crm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestController;

import com.quepassa.crm.model.MessageHistory;
import com.quepassa.crm.service.ContactService;
import com.quepassa.crm.service.MessageHistoryService;

@RestController
public class ChatController {

    @Autowired
    private ContactService contactService;

    private SimpMessagingTemplate template;

    private final MessageHistoryService messageHistoryService;

    
    public ChatController(SimpMessagingTemplate template, MessageHistoryService messageHistoryService){
        this.template = template;
        this.messageHistoryService = messageHistoryService;
    }

    @MessageMapping("/SendMessage")
    public void sendMessage(MessageHistory message) {
        // Obter o objeto de autenticação
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        // Obter o nome de usuário autenticado
        String authenticatedUsername = authentication.getName();
    
        // Recuperar o ID do usuário a partir do serviço
        String authenticatedUserId = contactService.getUserIdByUsername(authenticatedUsername);
    
        // Validar se o authenticatedUserId coincide com o fromId
        if (!message.getFromId().equals(authenticatedUserId)) {
            throw new IllegalArgumentException("Usuário não autorizado a enviar mensagens com este ID.");
        }

        messageHistoryService.saveMessage(message);
    
        // Enviar mensagem ao destinatário
        String toUserDestination = "/queue/messages/" + message.getToId();
        template.convertAndSend(toUserDestination, message);
        System.out.println(message);
    }
    

}
