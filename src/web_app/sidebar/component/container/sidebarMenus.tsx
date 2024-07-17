import { classJoiner } from "@/src/common/utils/helper"
import SidebarMenu from "../core/sidebarMenu"
import { montserrat } from "@/src/common/utils/fonts"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type sidebarMenus = {
    class?: string
}
const SidebarMenus = (props: sidebarMenus) =>{
    const dashboardPath = "/app"
    const pathname = usePathname()

    useEffect(() => {
   
    }, [pathname])
    
    const menus = [
        {name: "Dashboard", icon: "", url: dashboardPath},
        {name: "Appliances", icon: "", url: dashboardPath + "/appliance"},
        {name: "Analytics", icon: "", url: dashboardPath + "/analytics"},
        {name: "Energy Plan", icon: "", url: dashboardPath + "/plan"},
    
    ]


    return(
        <div className="overflow-auto h-[calc(100vh-80px)] box-border px-3 py-6">
            <div className={classJoiner("flex flex-col h-[2000px]", props.class)}>
                {menus.map(menu=>{
                    if(pathname == menu.url){
                    return <SidebarMenu title={menu.name} icon={menu.icon} 
                        url={menu.url} active textClass={classJoiner(montserrat.className, "font-bold")} 
                        key={menu.name+" - " +menu.url}/> 
                    }
                    return <SidebarMenu title={menu.name} icon={menu.icon} 
                        url={menu.url} textClass={classJoiner(montserrat.className, "font-bold")} 
                        key={menu.name+" - " +menu.url}/> 
                })}
            </div>
        </div>
    )
}

export default SidebarMenus