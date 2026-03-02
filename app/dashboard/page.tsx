"use client";

import { DatePickerInput } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { redirect } from "next/navigation";

export default function Page() {
  const [date, setDate] = useState<string | null>(
    new Date().toLocaleDateString("en-CA"),
  );

  const isAuth = useAuthStore((state) => state.isAuthenticated);

  if (!isAuth) redirect("/login");

  return (
    <div className="size-full">
      {/* Information */}
      <div className="flex justify-between items-center py-4">
        <h1>Overview</h1>
        <DatePickerInput
          placeholder="Pick date"
          value={date}
          onChange={(value) => setDate(value)}
        />
      </div>
    </div>
  );
}
