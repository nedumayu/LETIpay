package org.example.letipay.controllers;


import org.example.letipay.models.Payment;
import org.example.letipay.repos.CardRepository;
import org.example.letipay.repos.PaymentRepository;
import org.example.letipay.repos.UserRepository;
import org.example.letipay.securingweb.service.exceptions.PaymentsNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    CardRepository cardRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping()
    public List<Payment> getPaymentInfos() {
        if (paymentRepository.findAllPayments().isEmpty()) {
            throw new PaymentsNotFoundException("There are no payments yet");
        } else {
            return this.paymentRepository.findAllPayments();
        }
    }

}
