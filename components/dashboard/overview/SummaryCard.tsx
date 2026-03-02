import { cardBorder } from "@/constants/ui";
import {
  IconArrowRight,
  IconCalendar,
  IconMoneybag,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

interface SummaryCardProps {
  type: "Revenue" | "Patients" | "Appointments" | "Queue";
}

const cardTypes = {
  Revenue: {
    box: "#b7f1ed",
    icon: IconMoneybag,
    title: "Revenue",
    value: "$8,854",
    stats: {
      growth: "-12%",
    },
    href: "/dashboard/revenue",
  },
  Patients: {
    box: "#c7f1b7",
    icon: IconUser,
    title: "Patients",
    value: 135,
    stats: {
      newPatients: 32,
    },
    href: "/dashboard/patients",
  },
  Appointments: {
    box: "#f1dfb7",
    icon: IconCalendar,
    title: "Appointments",
    value: 7,
    stats: {
      isNotComplete: 4,
      isComplete: 3,
    },
    href: "/dashboard/appointments",
  },
  Queue: {
    box: "#b7bdf1",
    icon: IconMoneybag,
    title: "Current Queue",
    value: 13,
    stats: {
      duration: "3 mins ago",
    },
    href: "/dashboard/queue",
  },
};

export default function SummaryCard({ type }: SummaryCardProps) {
  const { box, icon: Icon, title, value, stats, href } = cardTypes[type];

  return (
    <div
      className={`${cardBorder} px-3 py-4 flex flex-col justify-center shadow-2xs gap-y-3`}
    >
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
      <hr className="border-t border-dotted border-gray-400" />
      <Link className="flex justify-between items-center" href={href}>
        <h1 className="text-sm">More Details</h1>
        <IconArrowRight size={10} />
      </Link>
    </div>
  );
}
