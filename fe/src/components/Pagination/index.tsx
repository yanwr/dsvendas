import SalePageable from "models/SalePageable";

interface PaginationProps {
  page: SalePageable;
  onPageChange: (numberPage: number) => void;
}

export default function PaginationComponent({ page, onPageChange }: PaginationProps) {
  return (
    <div className="row d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page.first && "disabled"}`}>
            <button
              className="page-link"
              disabled={page.first}
              onClick={() => onPageChange(page.number - 1)}
            >
              Anterior
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{page.number + 1}</span>
          </li>
          <li className={`page-item ${page.last && "disabled"}`}>
            <button
              className="page-link"
              disabled={page.last}
              onClick={() => onPageChange(page.number + 1)}
            >
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}