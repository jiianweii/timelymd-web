"use client";

import { DatePickerInput } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { redirect } from "next/navigation";
import SummaryCard from "@/components/dashboard/overview/SummaryCard";
import AppointmentList from "@/components/dashboard/overview/AppointmentList";
import { IconCalendar } from "@tabler/icons-react";
import { cardBorder } from "@/constants/ui";

const roleSummary = {
  OWNER:
    "Oversee and manage all clinic operations, including staff, services, schedules, and overall business performance.",
  DOCTOR:
    "Manage appointments, conduct consultations and e-visits, and provide prescriptions and patient care.",
  STAFF:
    "Handle patient queues, coordinate appointments, manage inventory, and process payments efficiently.",
};

export default function Page() {
  const [date, setDate] = useState<string | null>(
    new Date().toLocaleDateString("en-CA"),
  );

  const isAuth = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  if (!isAuth) redirect("/login");

  // Layout planning
  //   Revenue | Patients | Appointments | Queue
  //   Checkout  |  Upcoming Appointment
  //   Inventory running low | Queue List
  return (
    <div className="size-full flex flex-col ">
      {/* Information */}
      <div className="flex justify-between items-center py-4">
        <div>
          <h1 className="font-bold text-lg">Overview</h1>
          <p className="text-xs">{roleSummary[user?.role || "OWNER"]}</p>
        </div>

        <DatePickerInput
          placeholder="Pick date"
          value={date}
          onChange={(value) => setDate(value)}
          leftSection={<IconCalendar size={15} />}
        />
      </div>
      <div className="grid grid-cols-6 auto-rows-fr gap-2 flex-1">
        <SummaryCard type="Revenue" />
        <SummaryCard type="Patients" />
        <SummaryCard type="Appointments" />
        <SummaryCard type="Queue" />
        <AppointmentList />

        {/* Chart */}
        <div className={`${cardBorder} col-span-4 row-span-2`}></div>
        {/* Check out list */}
        <div className={`${cardBorder} col-span-3 row-span-2`}></div>
        {/* Queue */}
        <div className={`${cardBorder} col-span-3 row-span-2`}></div>
      </div>
    </div>
  );
}
