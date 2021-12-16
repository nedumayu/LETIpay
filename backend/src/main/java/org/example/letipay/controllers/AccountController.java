package org.example.letipay.controllers;


import org.example.letipay.models.Card;
import org.example.letipay.models.User;
import org.example.letipay.repos.CardRepository;
import org.example.letipay.repos.PaymentRepository;
import org.example.letipay.repos.UserRepository;
import org.example.letipay.securingweb.jwt.request.GrantRequest;
import org.example.letipay.securingweb.jwt.response.MessageResponse;
import org.example.letipay.securingweb.jwt.response.PaymentResponse;
import org.example.letipay.securingweb.service.exceptions.CardNotFoundException;
import org.example.letipay.securingweb.service.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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
    public ResponseEntity<PaymentResponse> getMyPayments() {
        return ResponseEntity.ok (
                new PaymentResponse(paymentRepository.findPaymentsAndUsers())
        );
    }

    @PostMapping("/grants")
    public ResponseEntity<?> addGrant(@Valid @RequestBody GrantRequest grantRequest) {
        User user = userRepository.findByEmail(grantRequest.getUserEmail())
                .orElseThrow(() -> new UserNotFoundException("User is not found"));
        Card card = cardRepository.findByUser(user)
                .orElseThrow(() -> new CardNotFoundException("Card is not found"));

        card.setCardCheck(card.getCardCheck()+grantRequest.getGrantSum());
        cardRepository.save(card);
        return ResponseEntity.ok(new MessageResponse("Стипендия начислена!"));
    }

}
