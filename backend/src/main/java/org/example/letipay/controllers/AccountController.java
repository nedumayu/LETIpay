package org.example.letipay.controllers;


import org.example.letipay.models.Payment;
import org.example.letipay.repos.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/account")
public class AccountController {

    @Autowired
    PaymentRepository paymentRepository;

    @PreAuthorize("hasRole('LETI')")
    @GetMapping()
    public List<Payment> getPayments() {
        return this.paymentRepository.findAll();
    }
}
