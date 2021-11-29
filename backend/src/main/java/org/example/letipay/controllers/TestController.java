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

    /*@GetMapping("/account")
    @PreAuthorize("hasRole('LETI')")
    public String testAccount() {
        return "Accountant Page of ";
    }
    @GetMapping("/payment")
    @PreAuthorize("hasRole('USER')")
    public String testPay() {
        return "Payment Page of ";
    }
    @GetMapping("/transfer")
    @PreAuthorize("hasRole('USER')")
    public String testTransfer() {
        return "Transfer Page of ";
    }*/

}
