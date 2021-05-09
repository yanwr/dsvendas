import { useEffect, useState } from "react";
import { format } from "date-fns";
import SalePageable from "models/SalePageable";
import { loadAllSalesPageable } from "services/SalesService";

export default function DataTableComponent() {
  const [pageProps, setPageProps] = useState<SalePageable>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
  });

  useEffect(() => {
    loadAllSalesPageable(pageProps).then(data => {
      data && setPageProps(data);
    });
  }, []);

  function formatLocalDate(date: string, pattern: string) {
    const newDate = new Date(date);
    return format(new Date(newDate.valueOf() + newDate.getTimezoneOffset() * 60 * 1000), pattern);
  }

  function renderDataSale() {
    return (
      pageProps.content ? pageProps.content.map((sale, index) =>
        <tr key={index}>
          <td>{formatLocalDate(sale.date, "dd/MM/yyyy")}</td>
          <td>{sale.seller.name}</td>
          <td>{sale.visited}</td>
          <td>{sale.deals}</td>
          <td>{sale.amount.toFixed(2)}</td>
        </tr>
      ) : <tr><td colSpan={5}>Carregando ...</td></tr>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {renderDataSale()}
        </tbody>
      </table>
    </div>
  );
}