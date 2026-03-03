import {
  IconCalendar,
  IconMoneybag,
  IconMoodHappy,
  IconUser,
} from "@tabler/icons-react";
import SummaryCard from "../SummaryCard";

export default function SummaryList() {
  return (
    <>
      <SummaryCard
        box="#b7f1ed"
        icon={IconMoneybag}
        title="Earnings"
        value="$3,854"
        href="/dashboard/revenue"
      />
      <SummaryCard
        box="#c7f1b7"
        icon={IconUser}
        title="Patients"
        value={"38"}
        href="/dashboard/patients"
      />
      <SummaryCard
        box="#f1dfb7"
        icon={IconCalendar}
        title="Appointments"
        value={"7"}
        href="/dashboard/outlets"
      />
      <SummaryCard
        box="#b7bdf1"
        icon={IconMoodHappy}
        title="Reviews"
        value={"13"}
        href="/dashboard/request"
      />
    </>
  );
}
