import { useState } from "react";
import AppointmentCalendar from "./AppointmentCalendar";

import AppointmentCard from "./AppointmentCard";
import CustomCard from "@/components/common/CustomCard";
import { Button } from "@mantine/core";

const FIXED_TODAY_DATE = new Date().toLocaleDateString("en-CA");

export default function AppointmentList() {
  const [currentDate, setCurrentDate] = useState<string>(FIXED_TODAY_DATE);
  return (
    <CustomCard className="col-span-2 row-span-4 flex flex-col items-center py-4 px-6 gap-y-3">
      <AppointmentCalendar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />

      <div className="w-full flex justify-between items-center">
        <h1 className="font-semibold text-gray-600">
          {currentDate === FIXED_TODAY_DATE
            ? "Today"
            : currentDate.split("-").slice(1).join("-")}
        </h1>
        <hr className="border-t border-dotted border-gray-400 w-4/5" />
      </div>
      <div className="flex flex-col gap-y-3 w-full">
        <AppointmentCard
          type="Clinical"
          status="Completed"
          timeFrom="10:00am"
          timeTo="10:15am"
          title="Natalie Goh"
          appointment="General Consultation"
        />
        <AppointmentCard
          type="Clinical"
          status="Ongoing"
          timeFrom="10:15am"
          timeTo="10:30am"
          title="Md Ismail"
          appointment="Lab Report"
        />
        <AppointmentCard
          type="E-Visit"
          status="Upcoming"
          timeFrom="10:30am"
          timeTo="10:45am"
          title="Narein"
          appointment="Monthly Consultation"
        />
        <Button>View Appointments</Button>
      </div>
    </CustomCard>
  );
}
