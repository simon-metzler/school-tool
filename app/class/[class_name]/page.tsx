import ClassTable from "@/components/class_table"


export default function Page ( {params} ) {
    return (<div>
        <p>{params.class_name}</p>
        <ClassTable />
    </div>)
}