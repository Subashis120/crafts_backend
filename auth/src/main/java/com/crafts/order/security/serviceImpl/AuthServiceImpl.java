package com.crafts.order.security.serviceImpl;

import com.crafts.order.security.config.JwtTokenGenerator;
import com.crafts.order.security.dto.AuthResponseDto;
import com.crafts.order.security.entity.CraftUser;
import com.crafts.order.security.repository.CraftUserRepository;
import com.crafts.order.security.service.AuthService;
import com.crafts.order.security.util.TokenType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

    private final CraftUserRepository userInfoRepo;

    private final JwtTokenGenerator jwtTokenGenerator;

    private final CustomUserDetailsService userDetailsService;

    @Override
    public AuthResponseDto getJwtTokensAfterAuthentication(Authentication authentication) {
        try
        {
            CraftUser craftUser = userInfoRepo.findByEmail(authentication.getName())
                    .orElseThrow(()->{
                        log.error("[AuthService:userSignInAuth] User :{} not found",authentication.getName());
                        return new ResponseStatusException(HttpStatus.NOT_FOUND,"USER NOT FOUND ");});


            String accessToken = jwtTokenGenerator.generateAccessToken(authentication);

            String refreshToken = jwtTokenGenerator.generateRefreshToken(authentication);

            log.info("[AuthService:userSignInAuth] Access token for user:{}, has been generated",craftUser.getEmail());
            return  AuthResponseDto.builder()
                    .accessToken(accessToken)
                    .accessTokenExpiry(15 * 60)
                    .refreshToken(refreshToken)
                    .refreshTokenExpiry(60*60)
                    .userName(craftUser.getEmail())
                    .userRoles(craftUser.getAuthorities().stream().map(auth -> auth.getAuthority()).collect(Collectors.toUnmodifiableList()))
                    .tokenType(TokenType.Bearer)
                    .id(craftUser.getId())
                    .name(craftUser.getFullName())
                    .build();


        }catch (Exception e){
            log.error("[AuthService:userSignInAuth]Exception while authenticating the user due to :"+e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,"Please Try Again");
        }
    }

}
