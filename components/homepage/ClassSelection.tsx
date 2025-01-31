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
            <div className="flex flex-col items-center">
                <p className="text-md font-bold">Klassenauswahl:</p>
                <div className="flex flex-wrap justify-center">
                    {classes.map((c) => {
                        return <a key={c.id} href={`/dashboard/${c.id}`} className="btn m-2 w-24 h-24">{c.name}</a>
                    })}
                </div>
            </div>
        </div>
    )

}