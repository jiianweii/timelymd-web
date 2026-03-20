"use client";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { redirect } from "next/navigation";

import DoctorDashboard from "@/components/ui/dashboard/DoctorDashboard";

import HelperSelection from "@/components/dashboard/overview/features/HelperSelection";

export default function Page() {
  const [date, setDate] = useState<string | null>(
    new Date().toLocaleDateString("en-CA"),
  );

  const isAuth = useAuthStore((state) => state.isAuthenticated);
  const role = "DOCTOR";

  if (!isAuth) redirect("/login");

  return (
    <div className="size-full flex flex-col ">
      {/* Information */}
      <HelperSelection date={date} setDate={setDate} role={role} />
      <DoctorDashboard />
    </div>
  );
}
