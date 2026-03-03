import CustomCard from "@/components/common/CustomCard";
import { IconArrowRight, TablerIcon } from "@tabler/icons-react";
import Link from "next/link";

interface SummaryCardProps {
  box: string;
  icon: TablerIcon;
  title: string;
  value: string;

  href: string;
}

export default function SummaryCard({
  box,
  icon: Icon,
  title,
  value,

  href,
}: SummaryCardProps) {
  return (
    <CustomCard className="px-3 py-4 flex flex-col justify-center shadow-2xs gap-y-3">
      <div className="flex justify-between">
        <div className="flex gap-x-3 items-center">
          <div
            className="size-12 flex items-center justify-center rounded-md"
            style={{ backgroundColor: box }}
          >
            <Icon size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-xs">{title}</p>
            <h1 className="font-bold">{value}</h1>
          </div>
        </div>
      </div>
      <hr className="border-t border-dotted border-gray-400" />
      <Link className="flex justify-between items-center" href={href}>
        <h1 className="text-sm">More Details</h1>
        <IconArrowRight size={10} />
      </Link>
    </CustomCard>
  );
}
