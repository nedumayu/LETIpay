package org.example.letipay.securingweb.jwt.response;

import org.example.letipay.models.Role;

import java.util.Set;

public class RoleResponse {
    private final Set<Role> roles;

    public RoleResponse(Set<Role> roles) {
        this.roles = roles;
    }

    public Set<Role> getRoles() {
        return roles;
    }
}
