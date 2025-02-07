"use client";
import { fetchParticipationByStudent } from "@/lib/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function ParticipationList() {
  const [participation, setParticipation] = useState([]);
  const params: any = useParams();

  useEffect(() => {
    async function getAttendance() {
      const data: any = await fetchParticipationByStudent(params.student_id);
      setParticipation(data);
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
            <th>Mitarbeitsgrund</th>
            <th>Aktion</th>
          </tr>
        </thead>
        <tbody>
          {participation.map((record: any, index: number) => (
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
              <td><select
                  className="select w-full max-w-xs"
                  value={record.is_present ? "+" : "-"}
                >
                  <option disabled>Anwesenheit Auswahl</option>
                  <option value="+">+</option>
                  <option value="-">-</option>
                </select></td>
              <td><input type="text" value={record.cause} placeholder="Type here" className="input w-full max-w-xs" /></td>
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
