"use client";

import {
  IconAdjustments,
  IconBuildingStore,
  IconCalendar,
  IconDatabaseDollar,
  IconLayoutDashboard,
  IconMessage,
  IconNotes,
  IconStethoscope,
  IconUsers,
  IconVaccine,
  IconVideoPlus,
} from "@tabler/icons-react";
import { Code, Group, ScrollArea } from "@mantine/core";
import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup";
import { UserButton } from "../UserButton/UserButton";

import classes from "./NavbarNested.module.css";

const mockdata = [
  { label: "Dashboard", icon: IconLayoutDashboard, link: "/dashboard" },
  {
    label: "Appointment",
    initiallyOpened: true,
    links: [
      { label: "Overview", icon: IconCalendar, link: "/" },
      { label: "Clinical", icon: IconStethoscope, link: "/" },
      { label: "E-Visit", icon: IconVideoPlus, link: "/" },
    ],
  },
  {
    label: "Manage Staff",
    initiallyOpened: true,
    links: [
      { label: "Doctor", icon: IconStethoscope, link: "/" },
      { label: "Nurse", icon: IconVaccine, link: "/" },
    ],
  },
  { label: "Schedule", icon: IconCalendar },
  { label: "Inventory", icon: IconBuildingStore },
  { label: "Patient", icon: IconUsers },

  { label: "Group Chat", icon: IconMessage },
  { label: "Revenue", icon: IconDatabaseDollar },
];

export function NavbarNested() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <nav className={`${classes.navbar} bg-navbar`}>
      <div className={classes.header}>
        <Group justify="space-between">
          <h1>TimelyMD</h1>
          <Code fw={700}>v1.0.0</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}
