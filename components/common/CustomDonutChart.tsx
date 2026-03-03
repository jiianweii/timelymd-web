import { DonutChart } from "@mantine/charts";
import "@mantine/charts/styles.css";

interface LegendItemProps {
  name: string;
  color: string;
  value: number;
}

const data: LegendItemProps[] = [
  { name: "Present", value: 6, color: "#37f507" },
  { name: "On Leave", value: 2, color: "#f5e507" },
  { name: "Offday", value: 3, color: "#07d1f5" },
  { name: "Absent", value: 1, color: "#f50707" },
];

function LegendItem({ color, name, value }: LegendItemProps) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-2 items-center">
        <div
          className="size-3 rounded-sm"
          style={{ backgroundColor: color }}
        ></div>
        <p className="text-sm font-semibold text-gray-600">{name}</p>
      </div>
      <p className="text-sm font-bold">{value}</p>
    </div>
  );
}

export default function CustomDonutChart() {
  return (
    <div className="flex items-center gap-x-4 self-center">
      <div className="relative">
        <DonutChart data={data} withTooltip={false} />
        {/* Labels */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
          <h1 className="font-semibold text-lg">12</h1>
          <p className="text-[10px] text-gray-600">Total employees</p>
        </div>
      </div>
      <div className="grid grid-rows-[1fr_1fr] grid-cols-[100px_100px] flex-1 gap-2.5">
        {data.map((d) => (
          <LegendItem key={d.name} {...d} />
        ))}
      </div>
    </div>
  );
}
