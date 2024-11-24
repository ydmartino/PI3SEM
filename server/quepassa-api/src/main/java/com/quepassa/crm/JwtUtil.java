package com.quepassa.crm;

import java.util.Date;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jws;

public class JwtUtil {

    private static final String SECRET_KEY_STRING = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"; // chave secreta
    private static final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(SECRET_KEY_STRING.getBytes());
    private static final long EXPIRATION_TIME = 3600000; // 1 hora

    // Método para gerar o token JWT
    public static String generateToken(String userId) {
        JwtBuilder builder = Jwts.builder()
                .claim("sub", userId) // Define o 'sub' como o userId
                .claim("iat", new Date()) // Data de emissão
                .claim("exp", new Date(System.currentTimeMillis() + EXPIRATION_TIME)) // Define o tempo de expiração
                .signWith(SECRET_KEY); // Usa a chave secreta para assinar
        return builder.compact();
    }

    // Método para extrair o 'userId' do token
    public static String extractUserId(String token) {
        JwtParser parser = Jwts.parser()  // Usando o parserBuilder() corretamente
                .verifyWith(SECRET_KEY) // Define a chave secreta
                .build();  // Cria o JwtParser

        Jws<Claims> jws = parser.parseSignedClaims(token);  // Parseia o JWT
        Claims claims = jws.getPayload(); // Obtém o corpo das claims

        return claims.getSubject(); // Usando o método getSubject para acessar o 'userId'
    }

    // Método para validar o token
    public static boolean validateToken(String token, String userId) {
        String extractedUserId = extractUserId(token);
        return (extractedUserId.equals(userId) && !isTokenExpired(token));
    }

    // Verifica se o token expirou
    private static boolean isTokenExpired(String token) {
        JwtParser parser = Jwts.parser()  // Usando o parserBuilder() corretamente
                .verifyWith(SECRET_KEY) // Define a chave secreta
                .build();  // Cria o JwtParser

        Jws<Claims> jws = parser.parseSignedClaims(token);  // Parseia o JWT
        Date expirationDate = jws.getPayload().getExpiration(); // Obtém a data de expiração

        return expirationDate.before(new Date());
    }
}
