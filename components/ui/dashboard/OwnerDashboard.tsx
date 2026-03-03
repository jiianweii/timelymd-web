import ComparisonTable from "@/components/dashboard/overview/owner/ComparisonTable";
import { cardBorder } from "@/constants/ui";
import { IconMoneybag, IconUser } from "@tabler/icons-react";
import MantineFloatingIndicator from "../FloatingIndicator/FloatingIndicator";
import { useState } from "react";
import Selection from "@/components/dashboard/overview/Selection";
import SummaryList from "@/components/dashboard/overview/owner/SummaryList";
import CustomDonutChart from "@/components/common/CustomDonutChart";

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
      <div
        className={`${cardBorder} col-span-2 row-span-3 flex flex-col py-4 px-6 gap-y-3`}
      >
        <h1 className="font-semibold text-sm">Employee Attendance</h1>
        <CustomDonutChart />
      </div>

      {/* Chart */}
      <div className={`${cardBorder} col-span-4 row-span-4 flex flex-col p-3`}>
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
        <div className=" h-full flex-1">
          <ComparisonTable />
        </div>
      </div>

      <div className={`${cardBorder} col-span-2 row-span-2 px-4 py-2`}>
        <h1 className="font-semibold text-sm">Employee Table</h1>
      </div>
    </div>
  );
}
