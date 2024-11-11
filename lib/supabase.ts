"use server";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const fetchClasses = async () => {
    
    let { data, error } = await supabase
    .from('class')
    .select('*');
        

    console.log(data);

    return data;
};