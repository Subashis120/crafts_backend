package com.crafts.gateway.security.repository;

import com.crafts.gateway.security.entity.Authority;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AuthorityRepository extends JpaRepository<Authority, String> {
    Authority findByRoleName(String label);
}
