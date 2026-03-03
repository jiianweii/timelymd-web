import { AreaChart } from "@mantine/charts";
import "@mantine/charts/styles.css";

const data = [
  { time: "9:00", visits: 12 },
  { time: "10:00", visits: 18 },
  { time: "11:00", visits: 13 },
  { time: "12:00", visits: 9 },
  { time: "13:00", visits: 4 },
  { time: "14:00", visits: 6 },
  { time: "15:00", visits: 4 },
];

export default function SummaryChart() {
  return (
    <AreaChart
      h="100%"
      data={data}
      dataKey="time"
      series={[
        {
          name: "visits",
          label: "Clinical Visits",
          color: "blue.6",
        },
      ]}
      curveType="linear"
      gridAxis="xy"
      withLegend={false}
      yAxisProps={{ domain: [0, 20] }}
    />
  );
}
