import { useEffect, useState } from "react";

export default function StudentListElement({ student_data }: any) {
  const [attandance, setAttandance] = useState(student_data.student.attandance);
  const [participation, setParticipation] = useState(
    student_data.student.participation
  );

  function updateAttandance(amount: number) {
    setAttandance(attandance + amount);
  }

  function updateParticipation(amount: number) {
    setParticipation(participation + amount);
  }

  return (
    <tr>
      <th>{student_data.student.id}</th>
      <td>
        {student_data.student.firstname + " " + student_data.student.lastname}
      </td>
      <td>
        <div className="flex gap-5 items-center">
          {attandance}%
          <div className="flex gap-1">
            <button onClick={() => updateAttandance(10)} className="btn">
              +
            </button>
            <button onClick={() => updateAttandance(-10)} className="btn">
              -
            </button>
          </div>
        </div>
      </td>
      <td>
        <div className="flex gap-5 items-center">
          {participation}%
          <div className="flex gap-1">
            <button onClick={() => updateParticipation(10)} className="btn">
              +
            </button>
            <button onClick={() => updateParticipation(-10)} className="btn">
              -
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
