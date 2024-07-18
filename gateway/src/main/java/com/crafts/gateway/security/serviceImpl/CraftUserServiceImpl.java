package com.crafts.gateway.security.serviceImpl;

import com.crafts.gateway.security.entity.CraftUser;
import com.crafts.gateway.security.repository.CraftUserRepository;
import com.crafts.gateway.security.service.CraftUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CraftUserServiceImpl implements CraftUserService {

    @Autowired
    private CraftUserRepository craftUserRepository;

    @Override
    public List<CraftUser> getAllUsers() {
        return craftUserRepository.findAll();
    }
}
