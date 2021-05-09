import Sale from "./Sale";

export default interface SalePageable {
  content?: Array<Sale>;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size?: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty?: boolean;
}