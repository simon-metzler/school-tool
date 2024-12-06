"use client";
import { fetchAttendanceByStudent } from "@/lib/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function AttendanceList() {
  const [attendance, setAttendance] = useState([]);
  const params: any = useParams();

  useEffect(() => {
    async function getAttendance() {
      const data: any = await fetchAttendanceByStudent(params.student_id);
      setAttendance(data);
    }
    getAttendance();
  }, []);

  return (
    <div>
      <h1>Attendance List</h1>
      <ul>
        {attendance.map((record: any, index: number) => (
          <li key={index}>
            {record.timestamp}: {record.is_present ? "Present" : "Absent"}
          </li>
        ))}
      </ul>
    </div>
  );
}
