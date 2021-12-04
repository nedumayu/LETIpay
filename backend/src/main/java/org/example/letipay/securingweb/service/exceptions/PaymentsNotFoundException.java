package org.example.letipay.securingweb.service.exceptions;

public class PaymentsNotFoundException extends RuntimeException{
    public PaymentsNotFoundException(String message) {
        super(String.format("Failed. %s", message));}
}
