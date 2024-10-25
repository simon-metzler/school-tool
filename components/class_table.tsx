"use client";
import PlusMinusButton from "@/components/ui/plus_minus_button";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function ClassTable({ params }) {
  // Liste mit den Daten für die Tabelle
  const [notes, setNotes] = useState<any>([]);

  useEffect(() => {
    let db_name = "class_" + params.class_name;
    console.log(db_name);

    const supabase = createClient();

    type Note = {
      id: number;
      name: string;
      participation: number;
      attendance: number;
      // Add other fields as per your "notes" table
    };

    const loadData = async () => {
      const { data, error } = await supabase
        .from(db_name) // Type assertion for the "notes" table
        .select("*");

      if (error) {
        console.error(error);
      } else if (data) {
        setNotes(data);

        console.log(data);
      }
    };
    loadData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Kopf der Tabelle */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Mitarbeit</th>
            <th>Anwesenheit</th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamische Erstellung der Zeilen */}
          {notes.map((row: any) => (
            <tr key={row.id}>
              <th>{row.id}</th>
              <td>{row.name}</td>
              <td>
                <div className="flex gap-5 items-center">
                  <div className="flex gap-1">
                    <PlusMinusButton type="+" params={params} id={row.id} />
                    <PlusMinusButton type="-" params={params} id={row.id}/>
                  </div>
                  {row.participation}%
                </div>
              </td>
              <td>
                <div className="flex gap-5 items-center">
                  <PlusMinusButton type="-" params={params} id={row.id}/>
                  {row.attendance}%
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
