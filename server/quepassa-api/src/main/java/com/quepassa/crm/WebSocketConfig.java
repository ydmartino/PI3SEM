package com.quepassa.crm;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private WebSocketHandshakeInterceptor handshakeInterceptor;


    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/queue"); // Prefixo para destinos do cliente
        config.setApplicationDestinationPrefixes("/app"); // Para mensagens enviadas ao servidor
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws")
                .setAllowedOrigins("http://localhost:5173")
                .addInterceptors(handshakeInterceptor); // Endpoint WebSocket
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(new ChannelInterceptor() {
            @Override
            public Message<?> preSend(Message<?> message, MessageChannel channel) {
                SimpMessageHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, SimpMessageHeaderAccessor.class);
                
                if (accessor != null && accessor.getUser() == null) {
                    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
                    if (authentication != null && authentication.isAuthenticated()) {
                        accessor.setUser(authentication);
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
