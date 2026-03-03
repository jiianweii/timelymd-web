import MenuAvatar from "@/components/common/MenuAvatar";
import { UserButton } from "@/components/ui/UserButton/UserButton";
import { useAuthStore } from "@/stores/useAuthStore";
import { Avatar, Menu } from "@mantine/core";
import { IconHelp, IconLogout, IconSettings } from "@tabler/icons-react";

export default function Profile() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <MenuAvatar
      icon={
        <Avatar color="initials" radius="xl" size={30}>
          JW
        </Avatar>
      }
    >
      <Menu.Dropdown>
        <UserButton />
        <Menu.Divider />
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item leftSection={<IconHelp size={14} />}>Support</Menu.Item>
        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={<IconLogout size={14} />}
          onClick={logout}
        >
          Sign Out
        </Menu.Item>
      </Menu.Dropdown>
    </MenuAvatar>
  );
}
