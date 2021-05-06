package com.projects.dsvendas.services;

import com.projects.dsvendas.entities.dtos.SellerDTO;
import java.util.List;

public interface SellerService {
    List<SellerDTO> findAll();
}
