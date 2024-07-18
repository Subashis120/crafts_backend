package com.crafts.discovery.repository;

import com.crafts.discovery.model.Craft;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CraftRepository extends MongoRepository<Craft, String> {
    Craft findByItemId(String itemId);
}
