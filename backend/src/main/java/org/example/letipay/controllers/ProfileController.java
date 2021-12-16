package org.example.letipay.controllers;

import org.example.letipay.models.Card;
import org.example.letipay.models.User;
import org.example.letipay.repos.CardRepository;
import org.example.letipay.repos.UserRepository;
import org.example.letipay.securingweb.jwt.request.CardRequest;
import org.example.letipay.securingweb.jwt.response.CardResponse;
import org.example.letipay.securingweb.jwt.response.MessageResponse;
import org.example.letipay.securingweb.jwt.response.ProfileResponse;
import org.example.letipay.securingweb.service.exceptions.CardNotFoundException;
import org.example.letipay.securingweb.service.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/profile")
public class ProfileController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    CardRepository cardRepository;

    @GetMapping()
    public ResponseEntity<?> getUserProfileInfo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(authentication.getName())
                .orElse(null);
        if(user != null) {
            return ResponseEntity.ok(new ProfileResponse(user));
        }
        else {
            throw new UserNotFoundException("User not found!");
        }
    }

    @PostMapping()
    public ResponseEntity<?> addCard(@Valid @RequestBody CardRequest cardRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new UserNotFoundException("User is not found"));
        Card card = new Card(
          cardRequest.getCardName(),
          cardRequest.getCardOwner(),
          cardRequest.getCardNumber(),
          cardRequest.getEndDate(),
          cardRequest.getCardCheck()
        );

        card.setUser(user);

        cardRepository.save(card);
        return ResponseEntity.ok(new MessageResponse("Success!"));
    }

    @GetMapping("/card")
    public ResponseEntity<?> showCard() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new UserNotFoundException("User is not found"));
        Card card = cardRepository.findByUser(user)
                .orElseThrow(() -> new CardNotFoundException("Card is not found"));

        return ResponseEntity.ok(new CardResponse(card));
    }

}
