package org.example.letipay.models;


import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table( name= "payments")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id",
            nullable = false, updatable = false, unique = true)
    private Long id;

    @Column(name = "pay_name", length = 20,
            nullable = false)
    private String payName;

    @Column(name = "pay_sum", length = 10,
            nullable = false)
    private int paySum;

    @Column(name = "pay_date")
    private String payDate;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "card_id", referencedColumnName = "user_id")
    @JsonBackReference
    private Card card;

    public Payment(String payName, int paySum, String payDate) {
        this.payName = payName;
        this.paySum = paySum;
        this.payDate = payDate;;
    }

    public Payment(Long id, String payName, int paySum, String payDate, Card card) {
        this.id = id;
        this.payName = payName;
        this.paySum = paySum;
        this.payDate = payDate;
        this.card = card;
    }

    public Payment() {}


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

    public Card getCard() {
        return card;
    }

    public void setCard(Card card) {
        this.card = card;
    }
}
