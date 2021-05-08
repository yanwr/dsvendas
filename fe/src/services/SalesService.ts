import api from "./api";
import TotalSale from "models/TotalSale";

export async function loadTotalSales() {
  try {
    const response = await api.get<TotalSale[]>("/sales/total/amount-by-seller");
    console.log("Response => ", response);
    return response.data;
  } catch (ex) {
    console.error("Error to get /sales/total/amount-by-seller", ex);
  }
}