import Link from "next/link";


export default function ClassSelection () {

    let classes = ["4cWI", "2cWI", "5cWI"];


    return (
        <div className="flex justify-between">
        {classes.map((class_name, index) => <Link href={"/class/" + class_name} key={index}><button className="btn mx-1">{class_name}</button></Link>)}
        </div>
);
}