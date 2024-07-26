import { classJoiner } from "@/src/common/utils/helper"
import PlanContainer from "../container/planContainer"

type layout = {
    class?:string
}
const PlanLayout = (props:layout) =>{
    let data = [
        {name: "Day Plan", isActive: true}, 
        {name: "Night Plan", isActive: false},
        {name: "Daysaver", isActive: false},
     ]
    return(
        <div className={classJoiner(props.class, "grid grid-cols-1 md:grid-cols-3 gap-6")}>
            {data.map(plan=>{
                return <PlanContainer title={plan.name} isActive={plan.isActive} key={plan.name+plan.isActive}/>
            })}
        </div>
    )
}

export default PlanLayout