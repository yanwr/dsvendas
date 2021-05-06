package com.projects.dsvendas.services;

import com.projects.dsvendas.entities.Seller;
import com.projects.dsvendas.entities.dtos.SellerDTO;
import com.projects.dsvendas.repositories.SellerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SellerServiceImpl implements SellerService {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private SellerRepository sellerRepository;

    @Override
    public List<SellerDTO> findAll() {
        return this.sellerRepository.findAll().stream().map(this::convertEntityToDTO).collect(Collectors.toList());
    }

    protected SellerDTO convertEntityToDTO(Seller seller) {
        return this.modelMapper.map(seller, SellerDTO.class);
    }
}