import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { loadTotalSales } from 'services/SalesService';

interface CharDataProps {
  labels?: Array<string>;
  series?: Array<number>;
}

export default function DonutChartComponent() {
  const [chartData, setChartData] = useState<CharDataProps>({ labels: [], series: [] });

  useEffect(() => {
    loadTotalSales().then(res => {
      setChartData({
        labels: res?.map(x => x.seller.name),
        series: res?.map(x => x.totalSales)
      });
    });
  }, []);

  const options = {
    legend: {
      show: true
    }
  };

  return (
    <Chart
      options={{
        ...options,
        labels: chartData.labels
      }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
}