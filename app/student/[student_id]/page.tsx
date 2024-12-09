import AttendanceList from "@/components/student/AttendanceList";
import ParticipationList from "@/components/student/ParticipationList";

export default function Page({ params }: { params: any }) {
  return (
    <div className="flex justify-evenly">
      <div>
        <h1>Attendance</h1>
        <AttendanceList />
      </div>
      <div>
        <h1>Participation</h1>
        <ParticipationList />
      </div>
    </div>
  );
}
