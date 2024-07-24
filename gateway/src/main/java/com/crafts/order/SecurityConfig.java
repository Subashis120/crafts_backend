package com.crafts.order;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain filterChain(ServerHttpSecurity httpSecurity){

        return httpSecurity
                .authorizeExchange(auth -> auth.pathMatchers("/oauth/**",
                                "/order/**", "/inventory/**", "/onboarding/**")
                        .permitAll()
                        .anyExchange()
                        .authenticated())
                .csrf(csrf -> csrf.disable())
                .build();
    }
}
