package com.crafts.order.security.repository;

import com.crafts.order.security.entity.CraftUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CraftUserRepository extends JpaRepository<CraftUser, String> {
    CraftUser findByAuthoritiesRoleName(String label);

    Optional<CraftUser> findByEmail(String username);
}
