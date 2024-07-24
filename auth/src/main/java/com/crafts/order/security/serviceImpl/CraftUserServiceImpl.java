package com.crafts.order.security.serviceImpl;

import com.crafts.order.security.entity.CraftUser;
import com.crafts.order.security.repository.CraftUserRepository;
import com.crafts.order.security.service.CraftUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CraftUserServiceImpl implements CraftUserService {

    @Autowired
    private CraftUserRepository craftUserRepository;

    @Override
    public List<CraftUser> getAllUsers() {
        return craftUserRepository.findAll();
    }

    @Override
    public CraftUser getUserByEmail(String email) {
        Optional<CraftUser> craftUser = craftUserRepository.findByEmail(email);
        if (craftUser.isPresent()){
            return craftUser.get();
        }

        else return null;
    }
}
