package org.example.letipay.securingweb.jwt.request;

public class CardRequest {
    private String cardName;
    private String cardOwner;
    private String cardNumber;
    private String endDate;
    private int cardCheck;

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
