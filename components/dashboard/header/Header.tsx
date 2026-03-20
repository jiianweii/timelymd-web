"use client";

import TeamMembers from "./TeamMembers";
import Notification from "./Notification";
import Message from "./Message";
import Profile from "./Profile";
import { useAuthStore } from "@/stores/useAuthStore";

export default function Header() {
  const user = useAuthStore((state) => state.user);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex justify-between w-full px-4 py-3 items-center border-b-border border-b">
      <div className="leading-5">
        <h1 className="font-bold">Hello, {user?.name}</h1>
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
