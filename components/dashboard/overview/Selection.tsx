import { NativeSelect } from "@mantine/core";
import { TablerIcon } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";

interface SelectionProps {
  data: string[];
  currentItem: string;
  setCurrentItem: Dispatch<SetStateAction<string>>;
  icon: TablerIcon;
}

export default function Selection({
  data,
  currentItem,
  setCurrentItem,
  icon: Icon,
}: SelectionProps) {
  return (
    <NativeSelect
      value={currentItem}
      onChange={(event) => setCurrentItem(event.currentTarget.value)}
      data={data}
      leftSection={<Icon size={16} />}
      leftSectionPointerEvents="none"
    />
  );
}
