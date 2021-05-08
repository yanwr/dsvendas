import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { loadSuccessSales } from 'services/SalesService';

interface ChartDataProps {
  labels?: {
    categories?: Array<string>;
  };
  series: [{
    name: string;
    data?: Array<number>;
  }];
}

export default function BarChartComponent() {
  const [chartData, setChartData] = useState<ChartDataProps>({
    labels: { categories: [] },
    series: [{ name: "", data: [] }]
  });

  useEffect(() => {
    loadSuccessSales().then(res => {
      setChartData({
        labels: { categories: res?.map(x => x.seller.name) },
        series: [{
          name: "% Sucesso",
          data: res?.map(x => formatPrecision(100.0 * x.deals / x.visited, 1))
        }]
      });
    });
  }, []);

  function formatPrecision(value: number, precision: number) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  return (
    <Chart
      options={{
        ...options,
        xaxis: chartData.labels
      }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
}