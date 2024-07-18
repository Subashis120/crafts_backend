package com.crafts.gateway.security.repository;

import com.crafts.gateway.security.entity.CraftUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CraftUserRepository extends JpaRepository<CraftUser, String> {
    CraftUser findByAuthoritiesRoleName(String label);
}
