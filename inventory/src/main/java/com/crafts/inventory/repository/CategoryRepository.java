package com.crafts.inventory.repository;

import com.crafts.inventory.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CategoryRepository extends MongoRepository<Category, String> {
    List<Category> findByIsPremium(boolean isPremium);
}
