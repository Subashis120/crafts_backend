package com.crafts.order.security.service;

import com.crafts.order.security.entity.CraftUser;

import java.util.List;

public interface CraftUserService {
    List<CraftUser> getAllUsers();

    Object getUserByEmail(String email);
}
