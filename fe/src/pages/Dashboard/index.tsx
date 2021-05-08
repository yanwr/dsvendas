import BarChartComponent from "components/Charts/Bar";
import DonutChartComponent from "components/Charts/Donut";
import DataTableComponent from "components/DataTable";

export default function Dashboard() {
  return (
    <div className="container">
      <h1 className="text-primary py-3">DashBoard</h1>

      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
          <BarChartComponent />
        </div>
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
          <DonutChartComponent />
        </div>
      </div>

      <h1 className="text-primary py-3">Todas vendas</h1>
      <DataTableComponent />
    </div>
  );
}