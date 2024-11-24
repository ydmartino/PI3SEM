package com.quepassa.crm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

import com.quepassa.crm.JwtUtil;
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
    public void sendMessage(MessageHistory message, SimpMessageHeaderAccessor headerAccessor) {
    // Recebe o token JWT dos atributos da sessão
    String token = (String) headerAccessor.getSessionAttributes().get("token");
    if (token == null) {
        throw new IllegalArgumentException("Usuário não autenticado. Cabeçalhos recebidos: " + headerAccessor.toString());
    }

    // Valida o token e extrai o ID do usuário autenticado
    String authenticatedUserId;
    try {
        authenticatedUserId = JwtUtil.extractUserId(token);
    } catch (Exception e) {
        throw new IllegalArgumentException("Falha ao validar o token JWT: " + e.getMessage());
    }

    // Valida se o authenticatedUserId coincide com o fromId
    if (!message.getFromId().equals(authenticatedUserId)) {
        throw new IllegalArgumentException("Usuário não autorizado a enviar mensagens com este ID.");
    }

    // Salvar a mensagem no banco de dados
    messageHistoryService.saveMessage(message);

    // Enviar mensagem ao destinatário
    String toUserDestination = "/queue/messages/" + message.getToId();
    template.convertAndSend(toUserDestination, message);
    System.out.println("Mensagem enviada: " + message);
    }
    

}
