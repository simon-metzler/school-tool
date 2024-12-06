import { useEffect, useState } from "react";
import { addAttendance } from "@/lib/supabase";

export default function StudentListElement({ student_data }: any) {
  return (
    <tr>
      <th>{student_data.student.id}</th>
      <td>
        {student_data.student.firstname + " " + student_data.student.lastname}
      </td>
      <td>
        <div className="flex gap-5 items-center">
          {10}%
          <div className="flex gap-1">
            <button
              onClick={() => addAttendance(student_data.student.id, true)}
              className="btn"
            >
              +
            </button>
            <button
              onClick={() => addAttendance(student_data.student.id, false)}
              className="btn"
            >
              -
            </button>
          </div>
        </div>
      </td>
      <td>
        <div className="flex gap-5 items-center">
          {10}%
          <div className="flex gap-1">
            <button className="btn">+</button>
            <button className="btn">-</button>
          </div>
        </div>
      </td>
    </tr>
  );
}
