package com.crafts.inventory.rest;

import com.crafts.inventory.model.Category;
import com.crafts.inventory.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryRest {

    @Autowired
    private CategoryService categoryService;


    @GetMapping("/all")
    public ResponseEntity<?> getCategories() {
        List<Category> categories = categoryService.getCategories();
        return new ResponseEntity<Object>(categories, HttpStatus.OK);
    }

    @GetMapping("/premium")
    public ResponseEntity<?> getPremiumCategories(@RequestParam("isPremium") boolean isPremium) {
        List<Category> categories = categoryService.getPremiumCategories(isPremium);
        return new ResponseEntity<Object>(categories, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> saveCategory(@RequestBody Category category) {
        category = categoryService.saveCategory(category);
        return new ResponseEntity<Object>(category,HttpStatus.CREATED);
    }
}
