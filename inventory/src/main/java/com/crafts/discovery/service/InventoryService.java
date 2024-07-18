package com.crafts.discovery.service;

import com.crafts.discovery.model.Inventory;

import java.util.List;

public interface InventoryService {
    List<Inventory> getInventory();

    Inventory saveInventory(Inventory inventory);
}
