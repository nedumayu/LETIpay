package org.example.letipay.controllers;

import org.example.letipay.models.User;
import org.example.letipay.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @GetMapping("/main")
    public List<User> getUsers () {
        return this.userRepo.findAll();
    }

}
