import TotalSale from "models/TotalSale";
import SuccessSale from "models/SuccessSale";
import SalePageable from "models/SalePageable";
import axios from "axios";
import { API_BASE_URL } from "CONSTANTS";

export async function loadAllSalesPageable(pageNumber: number) {
  try {
    const response = await axios.get<SalePageable>(`${API_BASE_URL}/sales`, {
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
    const response = await axios.get<TotalSale[]>(`${API_BASE_URL}/sales/total/amount-by-seller`);
    return response.data;
  } catch (ex) {
    console.error("Error to get /sales/total/amount-by-seller", ex);
  }
}

export async function loadSuccessSales() {
  try {
    const response = await axios.get<SuccessSale[]>(`${API_BASE_URL}/sales/total/success-by-seller`);
    return response.data;
  } catch (ex) {
    console.error("Error to get /sales/total/success-by-seller", ex);
  }
}