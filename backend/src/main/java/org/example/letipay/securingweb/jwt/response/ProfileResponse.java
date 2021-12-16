package org.example.letipay.securingweb.jwt.response;


import org.example.letipay.models.User;

public class ProfileResponse {
    private String username;
    private String email;
    private String telephone;
    private String groupNumber;

    public ProfileResponse(String username, String email, String password, String telephone, String groupNumber) {
        this.username = username;
        this.email = email;
        this.telephone = telephone;
        this.groupNumber = groupNumber;
    }

    public ProfileResponse(User user) {
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.telephone = user.getTelephone();
        this.groupNumber = user.getGroupNumber();
    }

    public ProfileResponse() {}

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getGroupNumber() {
        return groupNumber;
    }

    public void setGroupNumber(String groupNumber) {
        this.groupNumber = groupNumber;
    }
}
