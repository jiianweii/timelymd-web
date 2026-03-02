import { cardBorder } from "@/constants/ui";
import { Badge } from "@mantine/core";
import { IconStethoscope } from "@tabler/icons-react";

type Status = "Completed" | "Ongoing" | "Upcoming" | "Cancelled";
type AppointmentType = "Clinical" | "E-Visit";

interface AppointmentCardProps {
  type: AppointmentType;
  status: Status;
  timeFrom: string;
  timeTo: string;
  title: string;
}

const statusStyles: Record<Status, string> = {
  Completed: "bg-green-500",
  Ongoing: "bg-yellow-400",
  Upcoming: "bg-blue-500",
  Cancelled: "bg-red-500",
};
export default function AppointmentCard({
  type,
  status,
  timeFrom,
  timeTo,
  title,
}: AppointmentCardProps) {
  return (
    <div className={`${cardBorder} flex rounded-md w-full`}>
      <div className={`w-3 rounded-l-md ${statusStyles[status]}`} />
      <div className="p-3 flex flex-col gap-y-2">
        <div>
          <div className="flex gap-x-2 items-center">
            {" "}
            <p className="font-medium">{title}</p>
            <Badge color={type === "Clinical" ? "blue" : "green"}>{type}</Badge>
          </div>

          <p className="text-sm text-gray-500">
            {timeFrom} - {timeTo}
          </p>
        </div>
        <div className="flex items-center gap-x-1">
          <IconStethoscope size={15} />
          <p className="font-medium text-sm">Dr. Jian Wei</p>
        </div>
      </div>
    </div>
  );
}
