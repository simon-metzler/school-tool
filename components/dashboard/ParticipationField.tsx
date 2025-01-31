export default function ParticipationField({setCause}:{setCause:any}){
    return(<input type="text" onChange={(e)=>{setCause(e.target.value)}} placeholder="Mitarbeitsgrund..." className="input input-bordered w-full max-w-xs m-4" />);
}