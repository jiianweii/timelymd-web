"use client";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { redirect } from "next/navigation";

import OwnerDashboard from "@/components/ui/dashboard/OwnerDashboard";
import DoctorDashboard from "@/components/ui/dashboard/DoctorDashboard";
import StaffDashboard from "@/components/ui/dashboard/StaffDashboard";

import HelperSelection from "@/components/dashboard/overview/features/HelperSelection";

const roleDashboard = {
  OWNER: <OwnerDashboard />,
  DOCTOR: <DoctorDashboard />,
  STAFF: <StaffDashboard />,
};

export default function Page() {
  const [date, setDate] = useState<string | null>(
    new Date().toLocaleDateString("en-CA"),
  );

  const isAuth = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const role = user?.role || "OWNER";

  const Dashboard = roleDashboard[role];

  if (!isAuth) redirect("/login");

  return (
    <div className="size-full flex flex-col ">
      {/* Information */}
      <HelperSelection date={date} setDate={setDate} role={role} />
      {Dashboard}
    </div>
  );
}
