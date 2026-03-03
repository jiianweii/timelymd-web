import { AreaChart } from "@mantine/charts";
import "@mantine/charts/styles.css";

const SAMPLE_DATA = [
  {
    date: "1 March",
    Woodlands: 188,
    "Yio Chu Kang": 174,
  },
  {
    date: "2 March",
    Woodlands: 234,
    "Yio Chu Kang": 198,
  },
  {
    date: "3 March",
    Woodlands: 172,
    "Yio Chu Kang": 154,
  },
  {
    date: "4 March",
    Woodlands: 204,
    "Yio Chu Kang": 167,
  },
  {
    date: "5 March",
    Woodlands: 221,
    "Yio Chu Kang": 190,
  },
  {
    date: "6 March",
    Woodlands: 248,
    "Yio Chu Kang": 201,
  },
];

export default function ComparisonTable() {
  return (
    <AreaChart
      h="100%"
      data={SAMPLE_DATA}
      dataKey="date"
      series={[
        { name: "Woodlands", color: "indigo.6" },
        { name: "Yio Chu Kang", color: "blue.6" },
      ]}
      curveType="linear"
      tickLine="x"
      gridAxis="xy"
      withLegend
      legendProps={{ verticalAlign: "top" }}
      gridProps={{ xAxisId: "bottom", yAxisId: "left" }}
      xAxisLabel="Date of Visit"
      yAxisLabel="No of Patients"
    />
  );
}
