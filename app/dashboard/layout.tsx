import Header from "@/components/dashboard/header/Header";
import { NavbarNested } from "@/components/ui/NavbarNested/NavbarNested";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarNested />
      {/* Dashboard */}
      <main className="flex-8 flex flex-col">
        {/* Heading */}
        <Header />
        {/* Body */}
        <div className="size-full py-2 px-4">{children}</div>
      </main>
    </>
  );
}
