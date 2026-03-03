"use client";

import { capitalizeFirstLetter } from "@/utils/helper";

import { usePathname } from "next/navigation";
import TeamMembers from "./TeamMembers";
import Notification from "./Notification";
import Message from "./Message";
import Profile from "./Profile";

export default function Header() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const title = segments.length
    ? capitalizeFirstLetter(segments[segments.length - 1])
    : capitalizeFirstLetter(pathname);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex justify-between w-full px-4 py-3 items-center border-b-border border-b">
      <div className="leading-5">
        <h1 className="font-bold">{title}</h1>
        <p className="text-xs text-gray-600">{today}</p>
      </div>
      <div className="flex gap-x-4 items-center">
        <TeamMembers />
        <Notification />
        <Message />
        <Profile />
      </div>
    </div>
  );
}
