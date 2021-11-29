package org.example.letipay.securingweb.jwt.response;

import org.example.letipay.models.Card;

public class CardResponse {
    private String cardName;
    private String cardOwner;
    private String cardNumber;
    private String endDate;
    private int cardCheck;

    public CardResponse(String cardName, String cardOwner, String cardNumber, String endDate, int cardCheck) {
        this.cardName = cardName;
        this.cardOwner = cardOwner;
        this.cardNumber = cardNumber;
        this.endDate = endDate;
        this.cardCheck = cardCheck;
    }

    public CardResponse(Card card) {
        this.cardName = card.getCardName();
        this.cardOwner = card.getCardOwner();
        this.cardNumber = card.getCardNumber();
        this.endDate = card.getEndDate();
        this.cardCheck = card.getCardCheck();
    }

    public CardResponse() {}

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getCardOwner() {
        return cardOwner;
    }

    public void setCardOwner(String cardOwner) {
        this.cardOwner = cardOwner;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public int getCardCheck() {
        return cardCheck;
    }

    public void setCardCheck(int cardCheck) {
        this.cardCheck = cardCheck;
    }
}
