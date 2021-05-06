package com.projects.dsvendas.services;

import com.projects.dsvendas.entities.dtos.SaleDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface SaleService {
    Page<SaleDTO> findAll(Pageable pageable);
}
