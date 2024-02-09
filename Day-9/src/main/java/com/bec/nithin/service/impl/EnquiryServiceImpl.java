package com.bec.nithin.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bec.nithin.dto.request.EnquiryRequest;
import com.bec.nithin.dto.response.BasicResponse;
import com.bec.nithin.dto.response.EnquiryResponse; 
import com.bec.nithin.model.Enquiry; 
import com.bec.nithin.repository.EnquiryRepository;
import com.bec.nithin.service.EnquiryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EnquiryServiceImpl implements EnquiryService {

    private final EnquiryRepository enquiryRepository;

    @Override
    public BasicResponse<EnquiryResponse> getAllenquiry() {
        List<Enquiry> enquiries = enquiryRepository.findAll();
        List<EnquiryResponse> payResponses = enquiries.stream()
                .map(enquiry -> EnquiryResponse.builder().enquiryId(enquiry.getEnquiryId()).description(enquiry.getDescription()).enquiryType(enquiry.getEnquiryType()).title(enquiry.getTitle())
                        .build())
                .collect(Collectors.toList());

        return BasicResponse.<EnquiryResponse>builder()
                .message("Payment Data fetched").data(payResponses).build();
    }

    @Override
    public EnquiryResponse register(EnquiryRequest request) {
       Enquiry enquiry = Enquiry.builder().enquiryDate(request.getEnquiryDate()).description(request.getDescription()).enquiryType(request.getEnquiryType()).build();
        enquiryRepository.save(enquiry);
        return EnquiryResponse.builder()
                .message("Enquiry Registered Successfully")
                .build();
    }

    @Override
    public BasicResponse<EnquiryResponse> deleteEnquiry(String enquiryId) {
        // TODO Auto-generated method stub
        if (enquiryRepository.existsById(enquiryId)) {
            enquiryRepository.deleteById(enquiryId);
            return BasicResponse.<EnquiryResponse>builder()
                    .message("Enquiry deleted successfully")
                    .build();
        } else {
            return BasicResponse.<EnquiryResponse>builder()
                    .message("Payment found with ID: " + enquiryId)
                    .build();
        }
    }
}
