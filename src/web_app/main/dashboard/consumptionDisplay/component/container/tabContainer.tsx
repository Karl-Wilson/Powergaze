import { MouseEventHandler, useRef, useState } from "react"
import Tab from "../core/tab"

type tab = {
    click: (label:string)=>void
    labelClicked: string
    tabs: string[]
}
const TabContainer = ({labelClicked, click, tabs}:tab) =>{
    return(
        <div className="flex flex-row border-b-2 border-solid border-neutral-400 w-full">
            {tabs.map(tab=>{
                return   <Tab label={tab} active={labelClicked == tab? true : false} click={()=>click(tab)} key={tab+Math.random()}/>
            })}
        </div>
    )
}
{/* <Tab label="Today" active={labelClicked == "Today"? true : false} click={()=>click("Today")}/>
<Tab label="Yesterday" active={labelClicked == "Yesterday"? true : false} click={()=>click("Yesterday")}/>
<Tab label="Total" active={labelClicked == "Total"? true : false} click={()=>click("Total")}/> */}

export default TabContainer