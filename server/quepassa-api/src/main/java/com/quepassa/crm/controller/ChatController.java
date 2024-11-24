package com.quepassa.crm.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
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
    public void sendMessage(MessageHistory message, SimpMessageHeaderAccessor headerAccessor, Principal principal) {
        // Obter o objeto de autenticação
            if (principal == null) {
                throw new IllegalArgumentException("Usuário não autenticado. Cabeçalhos recebidos: "+ headerAccessor.toString());
        }    

        // Obter o nome de usuário autenticado
        String authenticatedUsername = principal.getName();
    
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
