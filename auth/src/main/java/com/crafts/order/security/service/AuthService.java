package com.crafts.order.security.service;

import com.crafts.order.security.dto.AuthResponseDto;
import org.springframework.security.core.Authentication;

public interface AuthService {
    AuthResponseDto getJwtTokensAfterAuthentication(Authentication authentication);
}
