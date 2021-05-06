package com.projects.dsvendas.entities.dtos;

import com.projects.dsvendas.entities.Seller;
import lombok.Getter;
import lombok.Setter;
import java.io.Serializable;

@Getter
@Setter
public class TotalSaleDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private SellerDTO seller;
    private Double totalSales;

    public TotalSaleDTO(Seller seller, Double totalSales) {
        this.seller = new SellerDTO(seller.getId(), seller.getName());
        this.totalSales = totalSales;
    }
}
