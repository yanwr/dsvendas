package com.projects.dsvendas.services;

import com.projects.dsvendas.entities.Seller;
import com.projects.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SellerServiceImpl implements SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    @Override
    public List<Seller> findALl() {
        return this.sellerRepository.findAll();
    }
}