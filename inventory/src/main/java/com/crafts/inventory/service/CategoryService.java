package com.crafts.inventory.service;

import com.crafts.inventory.model.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getCategories();

    Category saveCategory(Category category);

    List<Category> getPremiumCategories(boolean isPremium);
}
