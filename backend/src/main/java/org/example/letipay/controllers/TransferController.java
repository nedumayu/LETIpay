package org.example.letipay.controllers;


import org.example.letipay.models.Card;
import org.example.letipay.models.Payment;
import org.example.letipay.models.Transfer;
import org.example.letipay.models.User;
import org.example.letipay.repos.CardRepository;
import org.example.letipay.repos.PaymentRepository;
import org.example.letipay.repos.TransferRepository;
import org.example.letipay.repos.UserRepository;
import org.example.letipay.securingweb.jwt.request.PayRequest;
import org.example.letipay.securingweb.jwt.request.TransferRequest;
import org.example.letipay.securingweb.jwt.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/transfer")
public class TransferController {


    @Autowired
    TransferRepository transferRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CardRepository cardRepository;


    @PostMapping()
    public ResponseEntity<?> addPayment(@Valid @RequestBody TransferRequest transferRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user1 = userRepository.findByEmail(authentication.getName())
                .orElse(null);
        Card card1 = cardRepository.findByUser(user1).orElseThrow(() ->
                        new RuntimeException("Card is not found")); //карта того кто переводит

        User user2 = userRepository.findByTelephone(transferRequest.getTransTelephone());
        Card card2 = cardRepository.findByUser(user2).orElseThrow(() ->
                new RuntimeException("Card is not found")); //карта получателя

        Transfer transfer = new Transfer(
                transferRequest.getTransTelephone(),
                transferRequest.getTransSum(),
                transferRequest.getTransDate()
        );

        if (card1.getCardCheck() < transfer.getTransSum()) {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Недостаточно средств"));
        }
        else if (card1.getCardCheck() >= transfer.getTransSum()) {
            card1.setCardCheck(card1.getCardCheck() - transferRequest.getTransSum());
            card2.setCardCheck(card2.getCardCheck() + transferRequest.getTransSum());
            cardRepository.save(card1);
            cardRepository.save(card2);
            transfer.setCard(card1);

            transferRepository.save(transfer);
            return ResponseEntity.ok(new MessageResponse("Перевод прошел успешно!"));
        }
        else {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Произошла ошибка. Попробуйте позже"));
        }
    }

}
