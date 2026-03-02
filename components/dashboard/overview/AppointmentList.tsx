import { useState } from "react";
import AppointmentCalendar from "./AppointmentCalendar";
import { cardBorder } from "@/constants/ui";
import AppointmentCard from "./AppointmentCard";

const FIXED_TODAY_DATE = new Date().toLocaleDateString("en-CA");

export default function AppointmentList() {
  const [currentDate, setCurrentDate] = useState<string>(FIXED_TODAY_DATE);
  return (
    <div
      className={`${cardBorder} col-span-2 row-span-3 flex flex-col items-center py-4 px-6 gap-y-3`}
    >
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
          title="Consultation (Natalie)"
        />
        <AppointmentCard
          type="Clinical"
          status="Ongoing"
          timeFrom="10:15am"
          timeTo="10:30am"
          title="Consultation (Ismail)"
        />
        <AppointmentCard
          type="E-Visit"
          status="Upcoming"
          timeFrom="10:30am"
          timeTo="10:45am"
          title="Consultation (Narein)"
        />
      </div>
    </div>
  );
}
