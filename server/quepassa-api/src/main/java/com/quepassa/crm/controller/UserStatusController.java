package com.quepassa.crm.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.user.SimpUserRegistry;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserStatusController {

    @Autowired
    private SimpUserRegistry simpUserRegistry;

    @GetMapping("/Api/UserStatus")
    public boolean isUserOnline(@RequestParam UUID userId) {
        //Verifica se o usuário está conectado
        String userIdString = userId.toString(); // Converte para string para comparação
        simpUserRegistry.getUsers().forEach(user ->
            System.out.println("Usuário registrado: " + user.getName())
        );
        boolean isOnline = simpUserRegistry.getUsers().stream()
                .anyMatch(user -> user.getName().equals(userIdString));
        System.out.println("Usuário " + userIdString + " está online? " + isOnline);
        return isOnline;
        }

}
