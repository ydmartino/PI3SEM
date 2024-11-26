package com.quepassa.crm;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.messaging.context.SecurityContextChannelInterceptor;


@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer{

    private final WebSocketHandler webSocketHandler;
    private final WebSocketHandshakeInterceptor handshakeInterceptor;

    public WebSocketConfig(WebSocketHandler webSocketHandler, WebSocketHandshakeInterceptor handshakeInterceptor) {
        this.webSocketHandler = webSocketHandler;
        this.handshakeInterceptor = handshakeInterceptor;
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/queue", "/user"); // Prefixos para destinos do cliente
        config.setApplicationDestinationPrefixes("/app"); // Para mensagens enviadas ao servidor
        config.setUserDestinationPrefix("/user"); // Define "/user" como prefixo para destinos específicos de usuários

    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws")
                .setAllowedOrigins("http://localhost:5173")
                .addInterceptors(new WebSocketHandshakeInterceptor()); // Endpoint WebSocket
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(new ChannelInterceptor() {
            @Override
            public Message<?> preSend(Message<?> message, MessageChannel channel) {
                SimpMessageHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, SimpMessageHeaderAccessor.class);
    
                if (accessor != null) {
                    // Recupera o simpUser, se já existir
                    Object simpUser = accessor.getSessionAttributes().get("simpUser");
                    if (simpUser == null) {
                        // Tenta recuperar informações adicionais do contexto
                        Object token = accessor.getSessionAttributes().get("token");
    
                        if (token != null) {
                            try {
                                // Usa o JwtUtil para extrair o userId do token
                                String userId = JwtUtil.extractUserId(token.toString());
                                accessor.getSessionAttributes().put("simpUser", userId); // Salva o simpUser
                                accessor.setUser(() -> userId); // Define o usuário no WebSocket
                                System.out.println("Novo usuário autenticado no WebSocket: " + userId);
                            } catch (Exception e) {
                                System.err.println("Erro ao processar token: " + e.getMessage());
                            }
                        }
                    } else {
                        // Usuário já estava autenticado
                        accessor.setUser(() -> simpUser.toString());
                        System.out.println("Usuário autenticado no WebSocket: " + simpUser);
                    }
                }
    
                return message;
            }
        });
    }
    
    private ChannelInterceptor securityContextInterceptor() {
        return new SecurityContextChannelInterceptor();
    }

}
