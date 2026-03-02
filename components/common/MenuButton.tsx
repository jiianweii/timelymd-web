import { Button, Menu } from "@mantine/core";
import { TablerIcon } from "@tabler/icons-react";

interface MenuButtonProps {
  icon: TablerIcon;
  children: React.ReactNode;
}

export default function MenuButton({ icon: Icon, children }: MenuButtonProps) {
  return (
    <Menu shadow="md">
      <Menu.Target>
        <Icon size={16} color="#000" className="cursor-pointer" />
      </Menu.Target>

      <Menu.Dropdown>{children}</Menu.Dropdown>
    </Menu>
  );
}
