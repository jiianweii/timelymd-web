import {
  IconCalendar,
  IconCalendarClock,
  IconClipboardPlus,
  IconMoodHappy,
  IconUser,
  IconUsers,
  IconVideo,
} from "@tabler/icons-react";
import SummaryCard from "../SummaryCard";

export default function SummaryList() {
  return (
    <>
      <SummaryCard
        box="#b7f1ed"
        icon={IconCalendar}
        title="Appointments"
        value="18"
        href="/dashboard/doctor/appointments"
      />
      <SummaryCard
        box="#c7f1b7"
        icon={IconVideo}
        title="E-Visit"
        value={"5"}
        href="/dashboard/doctor/e-visits"
      />
      <SummaryCard
        box="#f1dfb7"
        icon={IconUsers}
        title="Queue Length"
        value={"7"}
        href="/dashboard/doctor/queue"
      />
      <SummaryCard
        box="#b7bdf1"
        icon={IconClipboardPlus}
        title="Lab Reports"
        value={"3"}
        href="/dashboard/doctor/lab"
      />
    </>
  );
}
