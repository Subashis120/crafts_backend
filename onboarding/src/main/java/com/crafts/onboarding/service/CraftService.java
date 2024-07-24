package com.crafts.onboarding.service;

import com.crafts.onboarding.model.Craft;

import java.util.List;

public interface CraftService {
    List<Craft> getCrafts();

    Craft saveCrafts(Craft craft);
}
