export default function ClassSelection () {

    let classes = ["4cWI", "2cWI", "5cWI"];


    return (
        <div>
        {classes.map(class_name => <button className="btn">{class_name}</button>)}
        </div>
);
}