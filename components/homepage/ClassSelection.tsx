"use client";
import { fetchClasses } from "@/lib/supabase"
import { useEffect, useState } from "react";

export default function ClassSelection() {

    const [classes, setClasses] = useState<{ id: string, name: string }[]>([]);

    useEffect(() => {
        const getClasses = async () => {
            const fetchedClasses = await fetchClasses();
            if (fetchedClasses) {
                setClasses(fetchedClasses);
            }
        };

        getClasses();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <p className="text-md font-bold">Select your class:</p>
                <div className="flex flex-wrap">
                    {classes.map((c) => {
                        return <a key={c.id} href={`/dashboard/${c.id}`} className="btn m-2">{c.name}</a>
                    })}
                </div>
            </div>
        </div>
    )

}