package com.projects.dsvendas.entities.dtos;

import com.projects.dsvendas.entities.Seller;
import lombok.Getter;
import lombok.Setter;
import java.io.Serializable;

@Getter
@Setter
public class SuccessSaleDTO implements Serializable {
    public static final long serialVersionUID = 1L;

    private SellerDTO seller;
    private Long visited;
    private Long deals;

    public SuccessSaleDTO(Seller seller, Long visited, Long deals) {
        this.seller = new SellerDTO(seller.getId(), seller.getName());
        this.visited = visited;
        this.deals = deals;
    }
}
