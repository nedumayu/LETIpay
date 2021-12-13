package org.example.letipay.securingweb.jwt.request;

public class GrantRequest {
    private String userEmail;
    private int grantSum;

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public int getGrantSum() {
        return grantSum;
    }

    public void setGrantSum(int grantSum) {
        this.grantSum = grantSum;
    }
}
