package org.example.letipay.models;


import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table( name= "transfers")
public class Transfer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String transTelephone;
    private String transDate;
    private int transSum;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "card_id", referencedColumnName = "user_id")
    @JsonBackReference
    private Card card;

    public Transfer(String transTelephone, int transSum, String transDate) {
        this.transTelephone = transTelephone;
        this.transSum = transSum;
        this.transDate = transDate;
    }

    public Transfer() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTransTelephone() {
        return transTelephone;
    }

    public void setTransTelephone(String transTelephone) {
        this.transTelephone = transTelephone;
    }

    public String getTransDate() {
        return transDate;
    }

    public void setTransDate(String transDate) {
        this.transDate = transDate;
    }

    public int getTransSum() {
        return transSum;
    }

    public void setTransSum(int transSum) {
        this.transSum = transSum;
    }

    public Card getCard() {
        return card;
    }

    public void setCard(Card card) {
        this.card = card;
    }
}
