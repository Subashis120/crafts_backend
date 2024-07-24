package com.crafts.onboarding.rest;

import com.crafts.onboarding.model.Craft;
import com.crafts.onboarding.service.CraftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/craft")
public class CraftRest {

    @Autowired
    private CraftService craftService;


    @GetMapping()
    public ResponseEntity<?> getCrafts() {
        List<Craft> craftList = craftService.getCrafts();
        return new ResponseEntity<Object>(craftList,HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> saveCrafts(@RequestBody Craft craft) {
        craft = craftService.saveCrafts(craft);
        return new ResponseEntity<Object>(craft,HttpStatus.CREATED);
    }

}
