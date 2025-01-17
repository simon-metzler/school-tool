"use client";
import { useState, useEffect } from "react";
import { fetchStudents } from "@/lib/supabase";
import { useParams } from "next/navigation";
import StudentListElement from "./StudentListElement";

export default function ClassTable({cause}: {cause:string}) {
  const [students, setStudents] = useState([]);
  const params: any = useParams();

  useEffect(() => {
    async function getStudents() {
      const data: any = await fetchStudents(parseInt(params.class_name));
      setStudents(data);
    }

    getStudents();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Anwesenheit</th>
            <th>Mitarbeit</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student_data: any) => (
            <StudentListElement
              key={student_data.student.id}
              student_data={student_data}
              cause={cause}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
