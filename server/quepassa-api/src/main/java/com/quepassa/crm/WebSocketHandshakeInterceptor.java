package com.quepassa.crm;

import java.util.List;
import java.util.Map;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

@Component
public class WebSocketHandshakeInterceptor implements HandshakeInterceptor{

    @Override
    public boolean beforeHandshake(
        ServerHttpRequest request,
        ServerHttpResponse response,
        WebSocketHandler wsHandler,
        Map<String, Object> attributes) throws Exception {

        // Extrai o cabeçalho Authorization
            List<String> authHeaders = request.getHeaders().get("Authorization");

            if (authHeaders != null && !authHeaders.isEmpty()) {
            String token = authHeaders.get(0).replace("Bearer ", "");
            
            try {
                // Valida o token JWT
                String userId = JwtUtil.extractUserId(token);
                
                // Adiciona o usuário autenticado aos atributos da sessão
                Authentication authentication = new UsernamePasswordAuthenticationToken(userId, null, List.of());
                attributes.put("authentication", authentication);

                System.out.println("Handshake: Autenticação bem-sucedida para o usuário " + userId);
                return true;
            } catch (Exception e) {
                System.out.println("Handshake: Falha na validação do token JWT - " + e.getMessage());
                return false;
            }
        }

        System.out.println("Handshake: Token JWT não encontrado no cabeçalho Authorization.");
        return false; // Rejeita conexões sem token válido
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception ex) {
        
    }


}
