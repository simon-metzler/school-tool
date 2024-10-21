import ClassTable from "@/components/class_table"


export default function Page ( {params}:{params:any} ) {
    return (<div>
        <p className="ml-4 font-bold text-xl">{params.class_name}</p>
        <ClassTable params={params}/>
    </div>)
}