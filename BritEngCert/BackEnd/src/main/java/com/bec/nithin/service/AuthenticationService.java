package com.bec.nithin.service;

import com.bec.nithin.dto.request.LoginRequest;
import com.bec.nithin.dto.request.RegisterRequest;
import com.bec.nithin.dto.response.LoginResponse;
import com.bec.nithin.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}
