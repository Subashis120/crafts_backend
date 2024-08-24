package com.crafts.inventory.repository;

import com.crafts.inventory.model.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CartRepository extends MongoRepository<Cart, String> {

}
