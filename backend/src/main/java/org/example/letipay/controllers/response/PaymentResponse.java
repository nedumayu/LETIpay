package org.example.letipay.controllers.response;

import org.example.letipay.repos.dto.PaymentInfo;

import java.util.List;

public class PaymentResponse {
    private final List<PaymentInfo> payments;

    public PaymentResponse(List<PaymentInfo> payments) {
        this.payments = payments;
    }

    public List<PaymentInfo> getPayments() {
        return payments;
    }
}
