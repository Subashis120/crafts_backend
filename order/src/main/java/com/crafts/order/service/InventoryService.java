package com.crafts.order.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "inventory")
public interface InventoryService {

    @GetMapping("/api/inventory/all")
    ResponseEntity<String> getInventory(@RequestHeader("Authorization") String token);
}
