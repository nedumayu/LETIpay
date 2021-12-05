package org.example.letipay.securingweb.jwt.request;


public class LoginRequest {

    @NotBlank(message = "email should not be blank")
    @Size(max=30, message = "email should be less than 30 characters")
    @Email(message = "email should have @")
    private String email;

    @NotBlank(message = "password should not be blank")
    @Size(max=100, message = "password should be less than 100 characters")
    private String password;

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
}
