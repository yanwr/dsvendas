package com.projects.dsvendas.controllers;

import com.projects.dsvendas.entities.Seller;
import com.projects.dsvendas.entities.dtos.SellerDTO;
import com.projects.dsvendas.services.SellerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/sellers")
public class SellerController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private SellerService sellerService;

    @GetMapping
    public ResponseEntity<List<SellerDTO>> findALl() {
        return ResponseEntity.ok(this.sellerService.findALl().stream().map(this::convertEntityToDTO).collect(Collectors.toList()));
    }

    protected SellerDTO convertEntityToDTO(Seller seller) {
        return this.modelMapper.map(seller, SellerDTO.class);
    }
}
