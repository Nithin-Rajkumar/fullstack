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
public class PaymentRequest {
    private String status;
    private double amountPaid;
    private Date paymentDate;
    private String modeOfPayment; 
    private String user_id;
    private String name;
    private String number;
    private String address;
    private String course;
    private String card_number;
    private String cvv;
    private String name_card;
}
