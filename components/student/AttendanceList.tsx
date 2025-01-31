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
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Datum</th>
            <th>Typ</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record: any, index: number) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                {new Date(record.timestamp).toLocaleString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </td>
              <td>{record.is_present ? "Anwesend" : "Abwesend"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
