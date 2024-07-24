package com.crafts.inventory.service;

import com.crafts.inventory.model.Inventory;

import java.util.List;

public interface InventoryService {
    List<Inventory> getInventory();

    Inventory saveInventory(Inventory inventory);
}
