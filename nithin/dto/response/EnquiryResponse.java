package com.bec.nithin.dto.response;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EnquiryResponse {
    private String enquiryId; 
    private String title;
        private Date enquiryDate;
    private String description;
    private String enquiryType;
    private String message;
    private String user_id;
}
