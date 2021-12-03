package org.example.letipay.controllers;


import org.example.letipay.models.Card;
import org.example.letipay.models.Payment;
import org.example.letipay.models.Transfer;
import org.example.letipay.models.User;
import org.example.letipay.repos.CardRepository;
import org.example.letipay.repos.PaymentRepository;
import org.example.letipay.repos.TransferRepository;
import org.example.letipay.repos.UserRepository;

import org.example.letipay.securingweb.jwt.response.PaymentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/history")
public class HistoryController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    TransferRepository transferRepository;

    @Autowired
    PaymentRepository paymentRepository;

    @GetMapping("/payment")
    public List<Payment> showPayHistory() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(authentication.getName())
                .orElse(null);
        return this.paymentRepository.findPaymentByCard(user);
    }

    @GetMapping("/transfer")
    public List<Transfer> showTransHistory() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(authentication.getName())
                .orElse(null);
        return this.transferRepository.findTransferByCard(user);
    }

}
