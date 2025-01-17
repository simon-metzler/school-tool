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

export const addAttendance = async (s_id: number, is_present: any) => {
  const { data, error } = await supabase
    .from("attendance")
    .insert([
      {
        s_id: s_id,
        timestamp: new Date().toISOString(),
        is_present: is_present,
      },
    ])
    .select();

  console.log(data, error);
};
export const fetchAttendanceByStudent = async (s_id: number) => {
  const { data, error } = await supabase
    .from("attendance")
    .select("*")
    .eq("s_id", s_id);

  if (error) {
    console.error("Error fetching attendance data:", error);
    return null;
  }

  return data;
};
export const fetchAttendanceValue = async (s_id: number) => {
  const { data, error } = await supabase
    .from("attendance")
    .select("is_present")
    .eq("s_id", s_id);

  if (error) {
    console.error("Error fetching attendance data:", error);
    return null;
  }

  if (!data || data.length === 0) {
    return 0;
  }

  const totalClasses = data.length;
  const attendedClasses = data.filter(
    (record: any) => record.is_present
  ).length;

  return attendedClasses;
};
export const addParticipation = async (s_id: number, type: string, cause:string) => {
  const { data, error } = await supabase
    .from("participation")
    .insert([
      {
        s_id: s_id,
        timestamp: new Date().toISOString(),
        type: type,
        cause: cause,
      },
    ])
    .select();

  console.log(data, error);
};
export const fetchParticipationByStudent = async (s_id: number) => {
  const { data, error } = await supabase
    .from("participation")
    .select("*")
    .eq("s_id", s_id);

  if (error) {
    console.error("Error fetching participation data:", error);
    return null;
  }

  return data;
};
export const fetchParticipationPercentage = async (s_id: number) => {
  const { data, error } = await supabase
    .from("participation")
    .select("type")
    .eq("s_id", s_id);

  if (error) {
    console.error("Error fetching participation data:", error);
    return null;
  }

  if (!data || data.length === 0) {
    return 0;
  }

  const totalParticipations = data.length;
  const positiveParticipations = data.filter(
    (record: any) => record.type === "+"
  ).length;

  return Math.floor((positiveParticipations / totalParticipations) * 100);
};
