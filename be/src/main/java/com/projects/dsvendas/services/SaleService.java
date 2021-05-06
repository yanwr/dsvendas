package com.projects.dsvendas.services;

import com.projects.dsvendas.entities.dtos.SaleDTO;
import com.projects.dsvendas.entities.dtos.SuccessSaleDTO;
import com.projects.dsvendas.entities.dtos.TotalSaleDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;

public interface SaleService {
    Page<SaleDTO> findAll(Pageable pageable);
    List<TotalSaleDTO> amountGroupedBySeller();
    List<SuccessSaleDTO> successGroupedBySeller();
}
