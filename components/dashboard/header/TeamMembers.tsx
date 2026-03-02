import MenuAvatar from "@/components/common/MenuAvatar";
import { Avatar, Menu } from "@mantine/core";

export default function TeamMembers() {
  return (
    <MenuAvatar
      icon={
        <Avatar.Group>
          <Avatar color="initials" size={30}>
            MT
          </Avatar>
          <Avatar color="initials" size={30}>
            JH
          </Avatar>
          <Avatar color="initials" size={30}>
            GA
          </Avatar>
          <Avatar size={30}>+2</Avatar>
        </Avatar.Group>
      }
    >
      <Menu.Dropdown>
        <Menu.Item>
          <div className="flex items-center gap-x-2">
            <Avatar color="initials" size={30}>
              MT
            </Avatar>
            <div>
              <h1 className="font-semibold">Marcus Tan</h1>
              <p className="text-[10px]">On Shift</p>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="flex items-center gap-x-2">
            <Avatar color="initials" size={30}>
              JH
            </Avatar>
            <div>
              <h1 className="font-semibold">Julius Han</h1>
              <p className="text-[10px]">On Shift</p>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="flex items-center gap-x-2">
            <Avatar color="initials" size={30}>
              GA
            </Avatar>
            <div>
              <h1 className="font-semibold">Gary Ang</h1>
              <p className="text-[10px]">Off Duty</p>
            </div>
          </div>
        </Menu.Item>
      </Menu.Dropdown>
    </MenuAvatar>
  );
}
