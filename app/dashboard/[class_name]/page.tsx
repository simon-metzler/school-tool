"use client";
import ClassTable from "@/components/dashboard/ClassTable";
import ParticipationField from "@/components/dashboard/ParticipationField";
import { useState } from "react";

export default function Page ( {params}:{params:any} ) {

    let [cause, setCause] = useState("");

    return (<div>
        <ParticipationField setCause={setCause} />  
        <ClassTable cause={cause} />
    </div>)
}