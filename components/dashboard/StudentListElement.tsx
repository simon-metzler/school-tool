import { use, useEffect, useState } from "react";
import {
  addAttendance,
  addParticipation,
  fetchAttendancePercentage,
  fetchParticipationPercentage,
} from "@/lib/supabase";
import Link from "next/link";

export default function StudentListElement({ student_data }: any) {
  const [attendance, setAttendance] = useState([]);
  const [participation, setParticipation] = useState([]);

  async function getAttendance() {
    const data: any = await fetchAttendancePercentage(student_data.student.id);
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
      <th>{student_data.student.id}</th>
      <td>
        {student_data.student.firstname + " " + student_data.student.lastname}
      </td>
      <td>
        <div className="flex gap-5 items-center">
          {attendance}%
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
            <button
              onClick={() => {
                addAttendance(student_data.student.id, false);
                getAttendance();
              }}
              className="btn"
            >
              -
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
                addParticipation(student_data.student.id, "+");
                getParticipation();
              }}
            >
              +
            </button>
            <button
              className="btn"
              onClick={() => {
                addParticipation(student_data.student.id, "-");
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
