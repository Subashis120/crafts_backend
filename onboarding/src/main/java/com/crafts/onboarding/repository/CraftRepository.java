package com.crafts.onboarding.repository;

import com.crafts.onboarding.model.Craft;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CraftRepository extends MongoRepository<Craft, String> {
    Craft findByItemId(String itemId);
}
