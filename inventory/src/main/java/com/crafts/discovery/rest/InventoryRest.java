package com.crafts.discovery.rest;

import com.crafts.discovery.model.Inventory;
import com.crafts.discovery.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
public class InventoryRest {

    @Autowired
    private InventoryService inventoryService;


    @GetMapping("/all")
    public ResponseEntity<?> getInventory() {
        List<Inventory> inventoryList = inventoryService.getInventory();
        return new ResponseEntity<Object>(inventoryList,HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> saveInventory(@RequestBody Inventory inventory) {
        inventory = inventoryService.saveInventory(inventory);
        return new ResponseEntity<Object>(inventory,HttpStatus.CREATED);
    }

}
