package com.bec.nithin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bec.nithin.model.Payment;

public interface PaymentRepository extends JpaRepository <Payment,String>{

}
