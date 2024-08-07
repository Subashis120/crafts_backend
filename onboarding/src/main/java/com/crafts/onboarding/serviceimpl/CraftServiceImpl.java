package com.crafts.onboarding.serviceimpl;

import com.crafts.onboarding.model.Craft;
import com.crafts.onboarding.repository.CraftRepository;
import com.crafts.onboarding.service.CraftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class CraftServiceImpl implements CraftService {

    @Autowired
    private CraftRepository craftRepository;

    @Override
    public List<Craft> getCrafts() {
        System.out.println("From onboarding");
        return craftRepository.findAll();
    }

    @Override
    public Craft saveCrafts(Craft craft) {
        Random rand = new Random();
        String itemId = "CRFT"+ rand.nextInt(1000);
        craft.setItemId(itemId);

        if(craftRepository.findByItemId(itemId) == null){
            return craftRepository.save(craft);
        }else{
            saveCrafts(craft);
        }

        return craft;
    }
}
