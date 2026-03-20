"use client";

import {
  IconBuildingStore,
  IconCalendar,
  IconDatabaseDollar,
  IconLayoutDashboard,
  IconLayoutSidebarLeftCollapseFilled,
  IconMessage,
  IconReport,
  IconSettings,
  IconStethoscope,
  IconUsers,
  IconVaccine,
  IconVideoPlus,
} from "@tabler/icons-react";
import { Code, Group, ScrollArea } from "@mantine/core";
import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup";
import { UserButton } from "../UserButton/UserButton";

import classes from "./NavbarNested.module.css";
import Logo from "@/components/common/Logo";
import { useAuthStore } from "@/stores/useAuthStore";

const commonItems = [
  { label: "Dashboard", icon: IconLayoutDashboard, link: "/dashboard" },
  { label: "Schedule", icon: IconCalendar, link: "/schedule" },
];

export const roleBasedNav = {
  OWNER: [
    ...commonItems,
    {
      label: "Appointment",
      initiallyOpened: true,
      links: [
        { label: "Overview", icon: IconCalendar, link: "/appointment" },
        {
          label: "Clinical",
          icon: IconStethoscope,
          link: "/appointment/clinical",
        },
        { label: "E-Visit", icon: IconVideoPlus, link: "/appointment/e-visit" },
      ],
    },
    {
      label: "Manage Staff",
      initiallyOpened: true,
      links: [
        {
          label: "Doctor",
          icon: IconStethoscope,
          link: "/manage-staff/doctor",
        },
        { label: "Nurse", icon: IconVaccine, link: "/manage-staff/nurse" },
      ],
    },
    { label: "Inventory", icon: IconBuildingStore, link: "/inventory" },
    { label: "Patient", icon: IconUsers, link: "/patient-list" },
    { label: "Chat", icon: IconMessage, link: "/chat" },
    { label: "Revenue", icon: IconDatabaseDollar, link: "/revenue" },
    { label: "Settings", icon: IconSettings, link: "/settings" },
  ],

  DOCTOR: [
    ...commonItems,
    {
      label: "Appointment",
      initiallyOpened: true,
      links: [
        {
          label: "Clinical",
          icon: IconStethoscope,
          link: "/appointment/clinical",
        },
        { label: "E-Visit", icon: IconVideoPlus, link: "/appointment/e-visit" },
      ],
    },
    { label: "Patient", icon: IconUsers, link: "/patient-list" },
    { label: "Chat", icon: IconMessage, link: "/chat" },
    { label: "Reports", icon: IconReport, link: "/reports" },
  ],

  STAFF: [
    ...commonItems,
    {
      label: "Appointment",
      initiallyOpened: true,
      links: [
        { label: "Overview", icon: IconCalendar, link: "/appointment" },
        { label: "E-Visit", icon: IconVideoPlus, link: "/appointment/e-visit" },
      ],
    },
    { label: "Patient", icon: IconUsers, link: "/patient-list" },
    { label: "Inventory", icon: IconBuildingStore, link: "/inventory" },
    { label: "Chat", icon: IconMessage, link: "/chat" },
  ],
};

export function NavbarNested() {
  const user = useAuthStore((state) => state.user);
  const links = roleBasedNav[user?.role || "STAFF"].map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <nav className={`${classes.navbar} bg-navbar`}>
      <div className={classes.header}>
        <Group justify="space-between" align="center">
          <Logo />
          <IconLayoutSidebarLeftCollapseFilled size={18} />
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      {/* <div className={classes.footer}>
        <UserButton />
      </div> */}
    </nav>
  );
}
