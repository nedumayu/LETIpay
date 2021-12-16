package org.example.letipay.controllers;


import org.example.letipay.models.User;
import org.example.letipay.repos.UserRepository;
import org.example.letipay.securingweb.jwt.response.RoleResponse;
import org.example.letipay.securingweb.service.exceptions.RoleException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/roles")
public class RoleController {

    @Autowired
    UserRepository userRepository;

    @GetMapping()
    public ResponseEntity<RoleResponse> getUserRoles() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Optional<User> user = userRepository.findByEmail(authentication.getName());
        User returnUser = user.orElseThrow(() ->
                new RoleException("Role is not found"));
        return ResponseEntity.ok(
                new RoleResponse(returnUser.getRoles()));
    }
}
