package com.bec.nithin.dto.request;




import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EnquiryRequest {
    private String title;
    private String description;
    private String enquiryType;
    private String user_id;
    private Date enquiryDate;
}
