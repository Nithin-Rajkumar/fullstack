package com.bec.nithin.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.bec.nithin.enumurate.Role;
import com.bec.nithin.model.Users;
import com.bec.nithin.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserCLI implements CommandLineRunner{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count()>0){
            return;
        }
        var user= Users.builder()
        .name("Admin")
        .email("admin@123")
        .password(passwordEncoder.encode("abc"))
        .role(Role.ADMIN)
        .build();

        userRepository.save(user);
    }

}
