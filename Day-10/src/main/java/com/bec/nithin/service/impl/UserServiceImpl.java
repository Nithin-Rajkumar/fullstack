package com.bec.nithin.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bec.nithin.dto.response.BasicResponse;
import com.bec.nithin.dto.response.UserResponse;
import com.bec.nithin.model.Users;
import com.bec.nithin.repository.UserRepository;
import com.bec.nithin.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser(){
        List<Users> users=userRepository.findAll();
        List<UserResponse> userResponses=users.stream().map(user -> UserResponse.builder()
                .id(user.getUserId())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .address(user.getAddress())
                .phoneNumber(user.getPhoneNumber())
                .build()).collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder().message("User Data Fetched Sucessfully!").data(userResponses).build();
    }


    }


     

