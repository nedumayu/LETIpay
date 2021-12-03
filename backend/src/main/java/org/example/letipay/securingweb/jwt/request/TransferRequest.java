package org.example.letipay.securingweb.jwt.request;

import java.util.Date;

public class TransferRequest {
    private String transTelephone;
    private int transSum;
    private String transDate;

    public String getTransDate() {
        return transDate;
    }

    public void setTransDate(String transDate) {
        this.transDate = transDate;
    }

    public String getTransTelephone() {
        return transTelephone;
    }

    public void setTransTelephone(String transTelephone) {
        this.transTelephone = transTelephone;
    }

    public int getTransSum() {
        return transSum;
    }

    public void setTransSum(int transSum) {
        this.transSum = transSum;
    }
}
