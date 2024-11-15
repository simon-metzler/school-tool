export default function StudentListElement({ student_data }: any) {
  return (
    <tr>
      <th>{student_data.student.id}</th>
      <td>
        {student_data.student.firstname + " " + student_data.student.lastname}
      </td>
      <td>
        <div className="flex gap-5 items-center">
          {student_data.student.attandance}
          <div className="flex gap-1">
            <button className="btn">+</button>
            <button className="btn">-</button>
          </div>
        </div>
      </td>
      <td>
        <div className="flex gap-5 items-center">
          {student_data.student.participation}
          <div className="flex gap-1">
            <button className="btn">+</button>
            <button className="btn">-</button>
          </div>
        </div>
      </td>
    </tr>
  );
}
