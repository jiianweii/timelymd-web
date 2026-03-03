import ComparisonTable from "@/components/dashboard/overview/owner/ComparisonTable";
import { IconMoneybag, IconUser } from "@tabler/icons-react";
import MantineFloatingIndicator from "../FloatingIndicator/FloatingIndicator";
import { useState } from "react";
import Selection from "@/components/dashboard/overview/Selection";
import SummaryList from "@/components/dashboard/overview/owner/SummaryList";
import CustomDonutChart from "@/components/common/CustomDonutChart";
import CustomPieChart from "@/components/common/CustomPieChart";
import CustomCard from "@/components/common/CustomCard";

// Layout planning
//   Revenue | Outlets | Appointments | Queue
//   Checkout  |  Upcoming Appointment
//   Inventory running low | Queue List

const SELECTION_LIST = ["Total Revenue", "Patient Visits"];

export default function OwnerDashboard() {
  const [currentTimeline, setCurrentTimeline] = useState<string>("Weekly");
  const [currentChartType, setCurrentChartType] = useState<string>(
    SELECTION_LIST[0],
  );
  return (
    <div className="grid grid-cols-6 auto-rows-fr gap-2 flex-1">
      <SummaryList />
      <CustomCard className="col-span-2 row-span-2 flex flex-col justify-around py-4 px-6 gap-y-3">
        <div className="flex justify-between">
          <h1 className="font-semibold text-sm">Employee Attendance</h1>
        </div>

        <CustomDonutChart />
      </CustomCard>

      {/* Chart */}
      <CustomCard className="col-span-4 row-span-4 flex flex-col p-3 gap-y-2">
        <div className="flex justify-between items-center">
          <Selection
            data={SELECTION_LIST}
            currentItem={currentChartType}
            setCurrentItem={setCurrentChartType}
            icon={
              currentChartType === SELECTION_LIST[0] ? IconMoneybag : IconUser
            }
          />
          <MantineFloatingIndicator
            data={["Weekly", "Monthly", "Yearly"]}
            active={currentTimeline}
            setActive={setCurrentTimeline}
          />
        </div>
        <div className="h-full flex-1">
          <ComparisonTable />
        </div>
      </CustomCard>

      <CustomCard className="col-span-2 row-span-3 py-4 px-6">
        <h1 className="font-semibold text-sm">Inventory Summary</h1>
        <CustomPieChart />
      </CustomCard>
    </div>
  );
}
