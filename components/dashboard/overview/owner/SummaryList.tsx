import {
  IconBuildingHospital,
  IconCalendarQuestion,
  IconMoneybag,
  IconUser,
} from "@tabler/icons-react";
import SummaryCard from "../SummaryCard";

export default function SummaryList() {
  return (
    <>
      <SummaryCard
        box="#b7f1ed"
        icon={IconMoneybag}
        title="Revenue"
        value="$8,854"
        href="/dashboard/revenue"
      />
      <SummaryCard
        box="#c7f1b7"
        icon={IconUser}
        title="Patients"
        value={"135"}
        href="/dashboard/patients"
      />
      <SummaryCard
        box="#f1dfb7"
        icon={IconBuildingHospital}
        title="Outlets"
        value={"2"}
        href="/dashboard/outlets"
      />
      <SummaryCard
        box="#b7bdf1"
        icon={IconCalendarQuestion}
        title="Leave Request"
        value={"13"}
        href="/dashboard/request"
      />
    </>
  );
}
