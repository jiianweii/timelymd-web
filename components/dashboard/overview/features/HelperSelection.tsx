import { Dispatch, SetStateAction, useState } from "react";
import Selection from "../Selection";
import { DatePickerInput } from "@mantine/dates";
import { IconBuildingHospital, IconCalendar } from "@tabler/icons-react";
import { UserRole } from "@/stores/useAuthStore";

const SAMPLE_OUTLETS = ["All Outlets", "Woodlands", "Yio Chu Kang"];

const roleSummary = {
  OWNER:
    "Oversee and manage all clinic operations, including staff, services, schedules, and overall business performance.",
  DOCTOR:
    "Manage appointments, conduct consultations and e-visits, and provide prescriptions and patient care.",
  STAFF:
    "Handle patient queues, coordinate appointments, manage inventory, and process payments efficiently.",
};

interface HelperSelectionProps {
  date: string | null;
  setDate: Dispatch<SetStateAction<string | null>>;
  role: UserRole;
}

export default function HelperSelection({
  date,
  setDate,
  role,
}: HelperSelectionProps) {
  const [currentLocation, setCurrentLocation] = useState<string>(
    SAMPLE_OUTLETS[0],
  );
  return (
    <div className="flex justify-between items-center py-2">
      <div>
        <h1 className="font-bold text-lg">Overview</h1>
        <p className="text-xs">{roleSummary[role]}</p>
      </div>

      <div className="flex items-center gap-x-3">
        {role === "OWNER" && (
          <Selection
            data={SAMPLE_OUTLETS}
            currentItem={currentLocation}
            setCurrentItem={setCurrentLocation}
            icon={IconBuildingHospital}
          />
        )}
        <DatePickerInput
          placeholder="Pick date"
          value={date}
          onChange={(value) => setDate(value)}
          leftSection={<IconCalendar size={15} />}
        />
      </div>
    </div>
  );
}
