package com.projects.dsvendas.services;

import com.projects.dsvendas.entities.Sale;
import com.projects.dsvendas.entities.dtos.SaleDTO;
import com.projects.dsvendas.entities.dtos.SuccessSaleDTO;
import com.projects.dsvendas.entities.dtos.TotalSaleDTO;
import com.projects.dsvendas.repositories.SaleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class SaleServiceImpl implements SaleService {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private SaleRepository saleRepository;

    @Override
    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable) {
        return this.saleRepository.findAll(pageable).map(this::convertEntityToDTO);
    }

    @Override
    @Transactional(readOnly = true)
    public List<TotalSaleDTO> amountGroupedBySeller() {
        return this.saleRepository.amountGroupedBySeller();
    }

    @Override
    @Transactional(readOnly = true)
    public List<SuccessSaleDTO> successGroupedBySeller() {
        return this.saleRepository.successGroupedBySeller();
    }

    protected SaleDTO convertEntityToDTO(Sale sale) {
        return this.modelMapper.map(sale, SaleDTO.class);
    }
}
