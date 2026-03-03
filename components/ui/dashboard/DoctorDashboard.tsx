import AppointmentList from "@/components/dashboard/overview/AppointmentList";
import QueueDetail from "@/components/dashboard/overview/doctor/QueueDetail";
import SummaryList from "@/components/dashboard/overview/doctor/SummaryList";

export default function DoctorDashboard() {
  return (
    <div className="grid grid-cols-6 auto-rows-fr gap-2 flex-1">
      <SummaryList />
      <AppointmentList />
      <QueueDetail />
    </div>
  );
}
