"use client";
import { fetchClasses } from "@/lib/supabase"
import { useEffect, useState } from "react";

export default function ClassSelection() {

    const [classes, setClasses] = useState<string[]>([]);

    useEffect(() => {
        const getClasses = async () => {
            const fetchedClasses = await fetchClasses();
            if (fetchedClasses) {
                setClasses(fetchedClasses.map((cls: any) => cls.name));
            }
            console.log(fetchedClasses);
        };

        getClasses();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <p className="text-md font-bold">Select your class:</p>
                <div className="flex flex-wrap">
                    {classes.map((c, index) => {
                        return <a key={index} href={`/dashboard/${c}`} className="btn m-2">{c}</a>
                    })}
                </div>
            </div>
        </div>
    )

}