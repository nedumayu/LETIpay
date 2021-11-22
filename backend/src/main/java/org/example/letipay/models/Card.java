package org.example.letipay.models;

import javax.persistence.*;

@Entity
@Table( name= "cards")
public class Card {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cardName;
    private String cardOwner;
    private String cardNumber;
    private String endDate;
    private String cardCheck;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    private User user;

    public Card(String cardName, String cardOwner, String cardNumber, String endDate, String cardCheck) {
        this.cardName = cardName;
        this.cardOwner = cardOwner;
        this.cardNumber = cardNumber;
        this.endDate = endDate;
        this.cardCheck = cardCheck;
    }

    public Card() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public String getCardCheck() {
        return cardCheck;
    }

    public void setCardCheck(String cardCheck) {
        this.cardCheck = cardCheck;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
