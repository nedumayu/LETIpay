package org.example.letipay.repos.dto;

public class PaymentInfo {
    private final Long id;
    private final String payName;
    private final int paySum;
    private final String payDate;
    private final UserInfo user;

    public PaymentInfo(Long id, String payName, int paySum, String payDate, String username) {
        this.id = id;
        this.payName = payName;
        this.paySum = paySum;
        this.payDate = payDate;
        this.user = new UserInfo(username);
    }

    public Long getId() {
        return id;
    }

    public String getPayName() {
        return payName;
    }

    public int getPaySum() {
        return paySum;
    }

    public String getPayDate() {
        return payDate;
    }

   public UserInfo getUser() {
        return user;
    }
}
