import Seller from "./Seller";

export default interface SuccessSale {
  seller: Seller;
  visited: number;
  deals: number;
}