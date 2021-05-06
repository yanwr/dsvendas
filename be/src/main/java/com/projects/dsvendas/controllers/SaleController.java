package com.projects.dsvendas.controllers;

import com.projects.dsvendas.entities.dtos.SaleDTO;
import com.projects.dsvendas.entities.dtos.SuccessSaleDTO;
import com.projects.dsvendas.entities.dtos.TotalSaleDTO;
import com.projects.dsvendas.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
    @Autowired
    private SaleService saleService;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findAllByPages(Pageable pageable) {
        return ResponseEntity.ok(this.saleService.findAll(pageable));
    }

    @GetMapping(value = "/total/amount-by-seller")
    public ResponseEntity<List<TotalSaleDTO>> amountGroupedBySeller() {
        return ResponseEntity.ok(this.saleService.amountGroupedBySeller());
    }

    @GetMapping(value = "/total/success-by-seller")
    public ResponseEntity<List<SuccessSaleDTO>> successGroupedBySeller() {
        return ResponseEntity.ok(this.saleService.successGroupedBySeller());
    }
}
