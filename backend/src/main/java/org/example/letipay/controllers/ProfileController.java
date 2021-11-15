package org.example.letipay.controllers;

import org.example.letipay.models.User;
import org.example.letipay.repos.UserRepository;
import org.example.letipay.securingweb.jwt.response.MessageResponse;
import org.example.letipay.securingweb.jwt.response.ProfileResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/profile")
public class ProfileController {
    @Autowired
    UserRepository userRepository;

    @GetMapping()
    public ResponseEntity<?> getUserProfileInfo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository
                .findByEmail(authentication.getName())
                .orElse(null);
        if(user != null) {
            return ResponseEntity.ok(
                    new ProfileResponse(user));
        }
        else {
            return ResponseEntity.badRequest()
                    .body(
                            new MessageResponse("User not found!")
                    );
        }
    }
}
