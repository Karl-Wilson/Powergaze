import { classJoiner } from "@/src/common/utils/helper"
import SidebarHeader from "../container/sidebarHeader"
import SidebarMenus from "../container/sidebarMenus"
type layout ={
    class?: string
}
const SidebarLayout = (props: layout) =>{
    return(
        <div className={classJoiner("w-full flex flex-col h-full", props.class)}>
            <SidebarHeader/>
            <SidebarMenus/>
        </div>
    )
}

export default SidebarLayout