package org.example.letipay.securingweb.service.exceptions;

public class TransfersNotFoundException extends RuntimeException {
    public TransfersNotFoundException(String message) {
        super(String.format("Failed. %s", message));
    }
}
