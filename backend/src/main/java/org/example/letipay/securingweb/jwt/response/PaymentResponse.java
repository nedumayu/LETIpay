package org.example.letipay.securingweb.jwt.response;

import org.example.letipay.models.Card;
import org.example.letipay.models.User;

public class PaymentResponse {

    private Long id;
    private String payName;
    private int paySum;
    private String payDate;
    private User username;
    private Card cardCheck;

    public PaymentResponse(Long id, String payName, int paySum, String payDate, User username, Card cardCheck) {
        this.id = id;
        this.payName = payName;
        this.paySum = paySum;
        this.payDate = payDate;
        this.username = username;
        this.cardCheck = cardCheck;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPayName() {
        return payName;
    }

    public void setPayName(String payName) {
        this.payName = payName;
    }

    public int getPaySum() {
        return paySum;
    }

    public void setPaySum(int paySum) {
        this.paySum = paySum;
    }

    public String getPayDate() {
        return payDate;
    }

    public void setPayDate(String payDate) {
        this.payDate = payDate;
    }

    public User getUsername() {
        return username;
    }

    public void setUsername(User username) {
        this.username = username;
    }

    public Card getCardCheck() {
        return cardCheck;
    }

    public void setCardCheck(Card cardCheck) {
        this.cardCheck = cardCheck;
    }
}
