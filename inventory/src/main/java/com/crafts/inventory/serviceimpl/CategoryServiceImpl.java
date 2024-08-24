package com.crafts.inventory.serviceimpl;

import com.crafts.inventory.model.Category;
import com.crafts.inventory.repository.CategoryRepository;
import com.crafts.inventory.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @Transactional
    @Override
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> getPremiumCategories(boolean isPremium) {
        return categoryRepository.findByIsPremium(isPremium);
    }
}
