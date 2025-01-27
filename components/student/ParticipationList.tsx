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
            <th>Date</th>
            <th>Type</th>
            <th>Cause</th>
          </tr>
        </thead>
        <tbody>
          {participation.map((record: any, index: number) => (
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
              <td>{record.type}</td>
              <td>{record.cause}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
