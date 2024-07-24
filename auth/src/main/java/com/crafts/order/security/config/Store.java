package com.crafts.order.security.config;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Component
@Getter
public class Store {
    private String token;

    public void setToken(String token) {
        this.token = "Bearer "+token;
    }
}
