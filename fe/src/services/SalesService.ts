import api from "./api";
import TotalSale from "models/TotalSale";
import SuccessSale from "models/SuccessSale";
import SalePageable from "models/SalePageable";

export async function loadAllSalesPageable(pageNumber: number) {
  try {
    const response = await api.get<SalePageable>("/sales", {
      params: {
        page: pageNumber,
        size: 20,
        sort: "date,desc"
      }
    });
    return response.data;
  } catch (ex) {
    console.error("Errot to get /sales", ex);
  }
}

export async function loadTotalSales() {
  try {
    const response = await api.get<TotalSale[]>("/sales/total/amount-by-seller");
    return response.data;
  } catch (ex) {
    console.error("Error to get /sales/total/amount-by-seller", ex);
  }
}

export async function loadSuccessSales() {
  try {
    const response = await api.get<SuccessSale[]>("/sales/total/success-by-seller");
    return response.data;
  } catch (ex) {
    console.error("Error to get /sales/total/success-by-seller", ex);
  }
}