import SidebarHeader from "../container/sidebarHeader"
import SidebarMenus from "../container/sidebarMenus"

const SidebarLayout = () =>{
    return(
        <div className="w-full flex flex-col h-full">
            <SidebarHeader/>
            <SidebarMenus/>
        </div>
    )
}

export default SidebarLayout