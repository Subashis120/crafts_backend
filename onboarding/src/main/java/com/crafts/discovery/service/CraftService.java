package com.crafts.discovery.service;

import com.crafts.discovery.model.Craft;

import java.util.List;

public interface CraftService {
    List<Craft> getCrafts();

    Craft saveCrafts(Craft craft);
}
