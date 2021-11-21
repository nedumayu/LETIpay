package org.example.letipay.controllers;

import org.example.letipay.models.User;
import org.example.letipay.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/test")
public class TestController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> getUsers() {
        return this.userRepository.findAll();
    }

    @DeleteMapping("/admin/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<?> delete(@PathVariable Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User is not found"));
        userRepository.delete(user);
        return ResponseEntity.ok().build();
    }
}
