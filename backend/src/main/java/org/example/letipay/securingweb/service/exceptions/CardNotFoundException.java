package org.example.letipay.securingweb.service.exceptions;

public class CardNotFoundException extends RuntimeException{
    public CardNotFoundException(String message) {
        super(String.format("Failed. %s", message));
    }
}
