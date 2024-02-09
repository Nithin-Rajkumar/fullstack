package com.bec.nithin.service;

import com.bec.nithin.dto.request.EnquiryRequest;
import com.bec.nithin.dto.response.BasicResponse;
import com.bec.nithin.dto.response.EnquiryResponse;

public interface EnquiryService {

    BasicResponse<EnquiryResponse> getAllenquiry();

    EnquiryResponse register(EnquiryRequest request);

    BasicResponse<EnquiryResponse> deleteEnquiry(String enquiryId);

}
