package org.example.letipay.securingweb.jwt.request;

public class CardRequest {
    @NotBlank(message = "card name should not be blank")
    @Size(min = 3, max = 30, message = "gender should be more than 3 and less than 30 characters")
    private String cardName;

    @NotBlank(message = "card owner should not be blank")
    @Size(min = 5, max = 30, message = "gender should be more than 5 and less than 30 characters")
    private String cardOwner;

    @NotBlank(message = "card number should not be blank")
    @Size(min = 16, max = 19, message = "gender should be more than 16 and less than 20 characters")
    private String cardNumber;

    @NotBlank(message = "end date should not be blank")
    @Size(min = 4, max = 5, message = "gender should be less than 6 characters")
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
