"use state";

import { MiniCalendar } from "@mantine/dates";
import React, { Dispatch, SetStateAction, useState } from "react";

interface AppointmentCalendarProps {
  currentDate: string;
  setCurrentDate: Dispatch<SetStateAction<string>>;
}

export default function AppointmentCalendar({
  currentDate,
  setCurrentDate,
}: AppointmentCalendarProps) {
  return (
    <MiniCalendar
      value={currentDate}
      onChange={(date) => setCurrentDate(date)}
      numberOfDays={7}
      size="md"
    />
  );
}
