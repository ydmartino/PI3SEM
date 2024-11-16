package com.quepassa.crm.controller;

import com.quepassa.crm.service.loginDTO;
import com.quepassa.crm.service.SignUpDTO;

import com.quepassa.crm.model.contact;

import com.quepassa.crm.repository.contactsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/auth")    
public class AuthController{

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private ContactsRepository contactsRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/signin")
    public ResponseEntity<String> authenticateUser(@RequestBody LoginDTO loginDTO){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
            loginDTO.getNameOrEmail(), loginDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return new ResponseEntity<>("User signed-in succesfully!", HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody SignupDTO signupDTO){
        //Checks if Email already exists in database
        if (contactsRepository.existsByEmail(signupDTO.getEmail())){
            return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
        }
        //Checks if name already exists in database
        if (contactsRepository.existsByName(signupDTO.getName())){
            return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
        }

    Contacts contact = new Contacts();
    contact.setName(signupDTO.getName());
    contact.setEmail(signupDTO.getEmail());
    contact.setPassword(paswordEncoder.encode(signupDTO.getPassword()));
    contact.setAdmin(signupDTO.isAdmin());
    contactsRepository.save(contact);

    return new ResponseEntity<>("User registered successfully!", HttpStatus.OK);

    }

    @GetMapping("/signup")
    public ResponseEntity<String> testSignup() {
        return ResponseEntity.ok("Signup endpoint works!");
    }
    
}