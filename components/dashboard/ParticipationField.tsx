export default function ParticipationField({setCause}:any){
    return(<input type="text" onChange={(e)=>setCause(e.target.value)} placeholder="Mitarbeit..." className="input input-bordered w-full max-w-xs m-4" />);
}