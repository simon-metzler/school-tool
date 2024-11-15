"use server";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const fetchClasses = async () => {
  let { data, error } = await supabase.from("class").select("*");

  return data;
};
export const fetchStudents = async (class_id: number) => {
  const { data, error } = await supabase
    .from("studentclass")
    .select("student(*)")
    .eq("c_id", class_id);

  if (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
    return null;
  }

  return data;
};
