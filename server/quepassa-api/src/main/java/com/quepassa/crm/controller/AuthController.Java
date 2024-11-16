package com.quepassa.crm.controller;

import com.quepassa.crm.service.loginDTO;
import com.quepassa.crm.service.SignUpDTO;

@RestController("/api/auth")
public class AuthController{

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private ContactsRepository contactsRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signin")
    public ResponseEntity<String> authenticateUser(@RequestBody LoginDTO loginDTO){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
            loginDTO.getNameOrEmail(), loginDTO.getPassword()
        ));
    SecurityContextHolder.getContext().setAuthentication(authentication);
    return new ResponseEntity<>("User signed-in succesfully!", HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody SignupDTO signupDTO){
        
        if (contactsRepository.existsByEmail(signupDTO.getEmail())){
            return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
        }
        if (contactsRepository.existsByName(signupDTO.getName())){
            return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
        }

    Contacts contact = new Contacts();
    contact.setName(signupDTO.getName());
    contact.setEmail(signupDTO.getEmail());
    contact.setPassword(paswordEncoder.encode(signupDTO.getPassword()));

    contactsRepository.save(contact);

    return new ResponseEntity<>("User registered successfully!", HttpStatus.OK);

    }

}