package org.example.letipay.controllers;


import org.example.letipay.models.Card;
import org.example.letipay.models.Payment;
import org.example.letipay.models.User;
import org.example.letipay.repos.CardRepository;
import org.example.letipay.repos.PaymentRepository;
import org.example.letipay.repos.UserRepository;
import org.example.letipay.securingweb.jwt.request.PayRequest;
import org.example.letipay.securingweb.jwt.response.CardResponse;
import org.example.letipay.securingweb.jwt.response.MessageResponse;
import org.example.letipay.securingweb.service.exceptions.CardNotFoundException;
import org.example.letipay.securingweb.service.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.sql.SQLOutput;
import java.util.List;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    PaymentRepository paymentRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CardRepository cardRepository;


    @PostMapping()
    public ResponseEntity<?> addPayment(@Valid @RequestBody PayRequest payRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new UserNotFoundException("User with that email is not found!"));
        Card card = cardRepository.findByUser(user)
                .orElseThrow(() -> new CardNotFoundException("Card is not found"));

        Payment payment = new Payment(
                payRequest.getPayName(),
                payRequest.getPaySum(),
                payRequest.getPayDate()
        );

        if (card.getCardCheck() < payment.getPaySum()) {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Недостаточно средств"));
        }
        else if (card.getCardCheck() >= payment.getPaySum()) {
            card.setCardCheck(card.getCardCheck() - payRequest.getPaySum());
            cardRepository.save(card);
            payment.setCard(card);

            paymentRepository.save(payment);
            return ResponseEntity.ok(new MessageResponse("Оплата прошла успешно!"));
        }
        else {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Произошла ошибка. Попробуйте позже"));
        }
    }


}
