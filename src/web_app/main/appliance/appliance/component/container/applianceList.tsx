import List from "@/src/common/components/core/list"
import Switch from "@/src/common/components/core/switch"
import { classJoiner } from "@/src/common/utils/helper"

type list = {
    list: {name: string, status: boolean, usage: number, cost: number}[] | []
    action: ()=>void
}
const ApplianceList = (props: list) =>{

    return(
        <>
            {props.list.map(item=>{
                return(   
                        <List key={item.name+item.status+Math.random()} headline={item.name} sub={item.status? "Running" : "Offline"} 
                        class={classJoiner("border-b-2 border-neutral-300 border-dotted")} 
                        headlineClass="text-xl" subClass={item.status? "text-dashboard-green" : "text-dashboard-red"}>
                            <Switch bgColor="bg-dashboard-purple" action={props.action}/>
                        </List>
                    )
            })}
        </>
    )
}

export default ApplianceList