package org.example.letipay.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table( name= "cards")
public class Card {
    @Id
    private Long id;

    @Column(name = "card_name", length = 30,
            nullable = false)
    private String cardName;

    @Column(name = "card_owner", length = 30,
            nullable = false)
    private String cardOwner;

    @Column(name = "card_number", length = 19,
            nullable = false)
    private String cardNumber;

    @Column(name = "end_date" length = 5,
            nullable = false)
    private String endDate;

    @Column(name = "card_check")
    private int cardCheck;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JsonBackReference
    private User user;

    @OneToMany(mappedBy = "card", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private Set<Payment> payment = new HashSet<>();

    @OneToMany(mappedBy = "card", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private Set<Transfer> transfer = new HashSet<>();

    public Card(String cardName, String cardOwner, String cardNumber, String endDate, int cardCheck) {
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

    public int getCardCheck() {
        return cardCheck;
    }

    public void setCardCheck(int cardCheck) {
        this.cardCheck = cardCheck;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Payment> getPayment() {
        return payment;
    }

    public void setPayment(Set<Payment> payment) {
        this.payment = payment;
    }
}
