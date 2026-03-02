"use client";

import { Avatar, Text, UnstyledButton } from "@mantine/core";
import classes from "./UserButton.module.css";
import { useAuthStore } from "@/stores/useAuthStore";

export function UserButton() {
  const user = useAuthStore((state) => state.user);
  return (
    <UnstyledButton className={classes.user}>
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        radius="xl"
        alt="Harriette Spoonlicker"
      />

      <div>
        <Text size="sm" fw={500}>
          {user?.name ?? "Guest"}
        </Text>

        <Text c="dimmed" size="xs">
          {user?.email ?? ""}
        </Text>
      </div>
    </UnstyledButton>
  );
}
