package com.quepassa.crm.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.web.bind.annotation.RestController;

import com.quepassa.crm.JwtUtil;
import com.quepassa.crm.model.MessageHistory;
import com.quepassa.crm.service.ContactService;
import com.quepassa.crm.service.MessageHistoryService;
import com.quepassa.crm.service.MessageWithSenderDTO;

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
        UUID authenticatedUserId;
        try {
            authenticatedUserId = UUID.fromString(JwtUtil.extractUserId(token));
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

        // Atualizar lista de mensagens recentes para ambos os usuários
        List<MessageWithSenderDTO> fromUserRecentMessages = messageHistoryService.getRecentMessagesForUser(message.getFromId());
        template.convertAndSendToUser(message.getFromId().toString(), "/queue/recent-messages", fromUserRecentMessages);
    
        List<MessageWithSenderDTO> toUserRecentMessages = messageHistoryService.getRecentMessagesForUser(message.getToId());
        template.convertAndSendToUser(message.getToId().toString(), "/queue/recent-messages", toUserRecentMessages);
    
        System.out.println("Mensagem enviada: " + message);
    
    }

    @MessageMapping("/RecentMessages")
    @SendToUser("/queue/recent-messages")
    public List<MessageWithSenderDTO> getRecentMessages(SimpMessageHeaderAccessor headerAccessor) {
        // Extrai o token JWT dos atributos da sessão
        String token = (String) headerAccessor.getSessionAttributes().get("token");
        if (token == null) {
            throw new IllegalArgumentException("Usuário não autenticado. Cabeçalhos recebidos: " + headerAccessor.toString());
        }

        // Valida o token e extrai o ID do usuário autenticado
        UUID authenticatedUserId;
        try {
            authenticatedUserId = UUID.fromString(JwtUtil.extractUserId(token));
        } catch (Exception e) {
            throw new IllegalArgumentException("Falha ao validar o token JWT: " + e.getMessage());
        }

        // Obtém as mensagens recentes para o usuário autenticado
        List<MessageWithSenderDTO> recentMessages = messageHistoryService.getRecentMessagesForUser(authenticatedUserId);

        // Retorna a lista de mensagens
        return recentMessages;
    }



}
