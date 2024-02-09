package com.bec.nithin.service.impl;

import static com.bec.nithin.enumurate.Role.USER;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bec.nithin.Util.JWTUtilJava;
import com.bec.nithin.dto.request.LoginRequest;
import com.bec.nithin.dto.request.RegisterRequest;
import com.bec.nithin.dto.response.LoginResponse;
import com.bec.nithin.dto.response.RegisterResponse;
import com.bec.nithin.model.Users;
import com.bec.nithin.repository.UserRepository;
import com.bec.nithin.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor 
public class AuthenticationServiceimpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JWTUtilJava jwtUtilJava;
    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<Users> isUserExists = userRepository.findByEmail((request.getEmail()));
        if (isUserExists.isPresent()) {

            return RegisterResponse.builder().message("User with mail id " + request.getEmail() + " is already exists")
                    .build();
        }
        var user = Users.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(USER)
                .build();
        userRepository.save(user);
        return RegisterResponse.builder()
                .message("User Created Successfully")
                .build();
    }

    @Override
    public LoginResponse login(LoginRequest request){
        authenticationManager
            .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token =jwtUtilJava.generateToken(user);
        return LoginResponse.builder().message("User Logged In Sucessfully!!!").token(token).build();
    }
}
