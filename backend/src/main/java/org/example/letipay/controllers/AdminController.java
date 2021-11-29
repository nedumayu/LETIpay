package org.example.letipay.controllers;

import org.example.letipay.models.Card;
import org.example.letipay.models.User;
import org.example.letipay.repos.CardRepository;
import org.example.letipay.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CardRepository cardRepository;

    @GetMapping()
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> getUsers() {
        return this.userRepository.findAll();
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<?> delete(@PathVariable Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User is not found"));
        Card card = cardRepository.findByUser(user)
                .orElseThrow(() ->
                        new RuntimeException("Card is not found"));
        userRepository.delete(user);
        cardRepository.delete(card);
        return ResponseEntity.ok().build();
    }
}
