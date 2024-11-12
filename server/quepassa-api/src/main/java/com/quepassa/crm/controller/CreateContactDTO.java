package com.quepassa.crm.controller;

public record CreateContactDTO(
    //Implement here every variable created or modified manually
    String password, 
    String name, 
    boolean isAdmin,
    String email

) {

}
