package com.bec.nithin.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import static jakarta.persistence.GenerationType.UUID;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = UUID)
    private String paymentId;
    private String name;
    private String number;
    private String address;
    private String course;
    private String card_number;
    private String cvv;
    private String name_card;

     
    private String status;

    
    private double amountPaid;

    @Temporal(TemporalType.DATE)
    private Date paymentDate;

    
    private String modeOfPayment;

    private String user_id;

}
