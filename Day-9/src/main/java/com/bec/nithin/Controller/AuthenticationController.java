package com.bec.nithin.Controller;

import static com.bec.nithin.Util.MyConstant.AUTH;
import static com.bec.nithin.Util.MyConstant.LOGIN;
import static com.bec.nithin.Util.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bec.nithin.dto.request.LoginRequest;
import com.bec.nithin.dto.request.RegisterRequest;
import com.bec.nithin.dto.response.LoginResponse;
import com.bec.nithin.dto.response.RegisterResponse;
import com.bec.nithin.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = authenticationService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Something Went Wrong!!!!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }

    }

    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();
        try {
            response = authenticationService.login(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Something Went Wrong");
            response.setToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
}
