package org.example.letipay.securingweb.jwt.request;

import java.util.Set;

public class SignupRequest {
    @NotBlank(message = "username should not be blank")
    @Size(min = 5, max = 50, message = "name should be more than 5 and less than 50 characters")
    private String username;

    @NotBlank(message = "email should not be blank")
    @Size(min = 5, max = 30, message = "email should be more than 5 and less than 30 characters")
    @Email(message = "email should have @")
    private String email;

    @NotBlank(message = "password should not be blank")
    @Size(min = 5, max = 100, message = "password should be more than 5 and less than 100 characters")
    private String password;

    @NotBlank(message = "telephone should not be blank")
    @Size(min = 10, max = 20, message = "telephone should be more than 10 and less than 20 characters")
    private String telephone;

    @Size(min = 1, max = 6, message = "group number should be more than 1 and less than 6 characters")

    private String groupNumber;
    private Set<String> role;

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public Set<String> getRole() {
        return this.role;
    }

    public void setRole(Set<String> role) {
        this.role = role;
    }
}
