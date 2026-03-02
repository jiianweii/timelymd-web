"use client";

import {
  IconBuildingStore,
  IconCalendar,
  IconDatabaseDollar,
  IconLayoutDashboard,
  IconMessage,
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

const mockdata = [
  { label: "Dashboard", icon: IconLayoutDashboard, link: "/dashboard" },
  { label: "Schedule", icon: IconCalendar, link: "/schedule" },
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
      { label: "Doctor", icon: IconStethoscope, link: "/manage-staff/doctor" },
      { label: "Nurse", icon: IconVaccine, link: "/manage-staff/nurse" },
    ],
  },

  { label: "Inventory", icon: IconBuildingStore, link: "/inventory" },
  { label: "Patient", icon: IconUsers, link: "/patient-list" },

  { label: "Chat", icon: IconMessage, link: "/chat" },
  { label: "Revenue", icon: IconDatabaseDollar, link: "/revenue" },
];

export function NavbarNested() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <nav className={`${classes.navbar} bg-navbar`}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo />
          <Code fw={700}>v1.0.0</Code>
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
