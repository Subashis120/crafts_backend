package com.crafts.onboarding.security.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Authority implements GrantedAuthority {

    private String id;

    private String role;

    private String roleName;


    public Authority(String role, String roleName) {
        this.role = role;
        this.roleName = roleName;
    }

    @Override
    public String getAuthority() {
        return role;
    }
}
