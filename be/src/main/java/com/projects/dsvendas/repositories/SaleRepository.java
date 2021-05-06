package com.projects.dsvendas.repositories;

import com.projects.dsvendas.entities.Sale;
import com.projects.dsvendas.entities.dtos.SuccessSaleDTO;
import com.projects.dsvendas.entities.dtos.TotalSaleDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {
    @Query("SELECT new com.projects.dsvendas.entities.dtos.TotalSaleDTO(s.seller, SUM(s.amount)) FROM Sale AS s GROUP BY s.seller")
    List<TotalSaleDTO> amountGroupedBySeller();

    @Query("SELECT new com.projects.dsvendas.entities.dtos.SuccessSaleDTO(s.seller, SUM(s.visited), SUM(s.deals)) FROM Sale AS s GROUP BY s.seller")
    List<SuccessSaleDTO> successGroupedBySeller();
}