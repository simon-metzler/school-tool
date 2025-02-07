import { useEffect, useState } from "react";
import {
  addAttendance,
  addParticipation,
  fetchAttendanceValue,
  fetchParticipationPercentage,
} from "@/lib/supabase";
import Link from "next/link";

export default function StudentListElement({ student_data, cause, id }: {student_data:any, cause:string, id:number}) {
  const [attendance, setAttendance] = useState([]);
  const [participation, setParticipation] = useState([]);

  async function getAttendance() {
    const data: any = await fetchAttendanceValue(student_data.student.id);
    setAttendance(data);
  }

  async function getParticipation() {
    const data: any = await fetchParticipationPercentage(
      student_data.student.id
    );
    setParticipation(data);
  }

  useEffect(() => {
    getAttendance();
  }, []);

  useEffect(() => {
    getParticipation();
  }, []);

  return (
    <tr>
      <th>{id}</th>
      <td>
        {student_data.student.firstname + " " + student_data.student.lastname}
      </td>
      <td>
        <div className="flex gap-5 items-center">
          {attendance} mal gefehlt
          <div className="flex gap-1">
            <button
              onClick={() => {
                addAttendance(student_data.student.id, true);
                getAttendance();
              }}
              className="btn"
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td>
        <div className="flex gap-5 items-center">
          {participation}%
          <div className="flex gap-1">
            <button
              className="btn"
              onClick={() => {
                addParticipation(student_data.student.id, "+", cause);
                getParticipation();
              }}
            >
              +
            </button>
            <button
              className="btn"
              onClick={() => {
                addParticipation(student_data.student.id, "-", cause);
                getParticipation();
              }}
            >
              -
            </button>
          </div>
        </div>
      </td>
      <td>
        <Link href={"/student/" + student_data.student.id}>
          <button className="btn">Profile</button>
        </Link>
      </td>
    </tr>
  );
}
