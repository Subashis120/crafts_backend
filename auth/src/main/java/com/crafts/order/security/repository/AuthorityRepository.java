package com.crafts.order.security.repository;

import com.crafts.order.security.entity.Authority;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AuthorityRepository extends JpaRepository<Authority, String> {
    Authority findByRoleName(String label);
}
