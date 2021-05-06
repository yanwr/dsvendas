package com.projects.dsvendas.controllers;

import com.projects.dsvendas.entities.dtos.SellerDTO;
import com.projects.dsvendas.services.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping(value = "/sellers")
public class SellerController {
    @Autowired
    private SellerService sellerService;

    @GetMapping
    public ResponseEntity<List<SellerDTO>> findAll() {
        return ResponseEntity.ok(this.sellerService.findAll());
    }
}
