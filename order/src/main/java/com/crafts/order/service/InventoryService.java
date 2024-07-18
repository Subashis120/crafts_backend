package com.crafts.order.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "inventory")
public interface InventoryService {

    @GetMapping("/api/inventory/all")
    ResponseEntity<String> getInventory();
}
