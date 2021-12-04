package org.example.letipay.securingweb.service.exceptions;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String message) {
        super(String.format("Failed. %s", message));
    }
}
