package com.bec.nithin.service;

import com.bec.nithin.dto.request.PaymentRequest;
import com.bec.nithin.dto.response.BasicResponse;
import com.bec.nithin.dto.response.PaymentResponse;

public interface PaymentService {
    BasicResponse<PaymentResponse> getAllUser();

    PaymentResponse register(PaymentRequest request);

    BasicResponse<PaymentResponse> deletebooking(String paymentId);
}
