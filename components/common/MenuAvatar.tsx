import { Menu } from "@mantine/core";
import React from "react";

interface MenuAvatarProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function MenuAvatar({ icon, children }: MenuAvatarProps) {
  return (
    <Menu shadow="md" width={250}>
      <Menu.Target>
        <div className="cursor-pointer">{icon}</div>
      </Menu.Target>
      <Menu.Dropdown>{children}</Menu.Dropdown>
    </Menu>
  );
}
