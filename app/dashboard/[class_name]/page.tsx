
export default function Page ( {params}:{params:any} ) {
    return (<div>
        <p className="ml-4 font-bold text-xl">{params.class_name}</p>
    </div>)
}