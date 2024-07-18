package com.crafts.gateway.security.controller;

import com.crafts.gateway.security.service.CraftUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class CraftUserController {

    @Autowired
    private CraftUserService craftUserService;

    @GetMapping("")
    public ResponseEntity<?> getAllUsers(){
        return new ResponseEntity<Object>(craftUserService.getAllUsers(), HttpStatus.OK);
    }
}
