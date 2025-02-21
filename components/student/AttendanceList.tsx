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
            <th>Aktion</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record: any, index: number) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <input
                  type="date"
                  value={new Date(record.timestamp).toISOString().split("T")[0]}
                  placeholder="Type here"
                  className="input w-full max-w-xs"
                />
              </td>
              <td>
                <select
                  className="select w-full max-w-xs"
                  value={record.is_present ? "Anwesend" : "Abwesend"}
                >
                  <option disabled>Anwesenheit Auswahl</option>
                  <option value="Anwesend">Anwesend</option>
                  <option value="Abwesend">Abwesend</option>
                </select>
              </td>
              <td>
                <div className="flex gap-2">
                  <button className="btn">Save</button>
                  <button className="btn">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
