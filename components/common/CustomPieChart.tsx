import { PieChart } from "@mantine/charts";

const data = [
  { name: "Good", value: 6, color: "#22a800" },
  { name: "Expiring", value: 2, color: "#ffee00" },
  { name: "Running Out", value: 3, color: "#ff4800" },
  { name: "Out of Stock", value: 1, color: "#8f0000" },
];

export default function CustomPieChart() {
  return <PieChart data={data} />;
}
