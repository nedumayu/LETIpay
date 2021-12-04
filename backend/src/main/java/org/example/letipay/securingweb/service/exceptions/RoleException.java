package org.example.letipay.securingweb.service.exceptions;

public class RoleException extends RuntimeException{
    public RoleException(String message) {
        super(String.format("Failed. %s", message));
    }
}
