package com.quepassa.crm;

import java.util.Map;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

@Component
public class WebSocketHandshakeInterceptor implements HandshakeInterceptor {

    @Override
    public boolean beforeHandshake(
        ServerHttpRequest request,
        ServerHttpResponse response,
        WebSocketHandler wsHandler,
        Map<String, Object> attributes) throws Exception {

        if (request instanceof ServletServerHttpRequest) {
            ServletServerHttpRequest servletRequest = (ServletServerHttpRequest) request;
            String token = servletRequest.getServletRequest().getParameter("token");

            if (token != null && !token.isEmpty()) {
                try {
                    String userId = JwtUtil.extractUserId(token);
                    attributes.put("token", token);
                    attributes.put("simpUser",userId);
                    System.out.println("Token e userId adicionados aos atributos do handshake.");
                } catch (Exception e) {
                    System.out.println("Erro ao validar o token no Handshake: "+e.getMessage());
                    return false;
                }
            } else {
            System.err.println("Token ausente ou inválido na conexão WebSocket.");
            return false; // Rejeita a conexão se o token estiver ausente
            }
        }
        return true;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception ex) {
    // Vazio intencionalmente
    }
}
