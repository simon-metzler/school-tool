"use client";
import { useState } from 'react';
import { createClient } from "@/utils/supabase/client";

export default function PlusMinusButton({ type, params, id }) {
    const [loading, setLoading] = useState(false);

    const supabase = createClient();

    const handleClick = async () => {
        setLoading(true);
        try {
            const incrementValue = type === '+' ? 1 : -1;
            console.log(`Updating participation by ${incrementValue} for id ${id} in class ${params.class_name}`);

            // Fetch the current participation value
            const { data: currentData, error: fetchError } = await supabase
                .from("class_" + params.class_name)
                .select('participation')
                .eq('id', id)
                .single();

            if (fetchError) {
                console.error('Error fetching current participation:', fetchError);
                return;
            }

            const newParticipation = currentData.participation + incrementValue;

            // Update the participation value
            const { data, error } = await supabase
                .from("class_" + params.class_name)
                .update({ participation: newParticipation })
                .eq('id', id)

            if (error) {
                console.error('Error updating participation:', error);
            } else {
                console.log('Participation updated:', data);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button className="btn" onClick={handleClick} disabled={loading}>
            {type}
        </button>
    );
}
