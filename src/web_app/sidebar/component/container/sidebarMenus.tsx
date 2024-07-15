import { classJoiner } from "@/src/common/utils/helper"
import SidebarMenu from "../core/sidebarMenu"
import { montserrat } from "@/src/common/utils/fonts"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type sidebarMenus = {
    class?: string
}
const SidebarMenus = (props: sidebarMenus) =>{
    const pathname = usePathname()
    const [page, setPage] = useState("Dashboard")
    useEffect(() => {
        if(!isPageSameAsPAthname()){
            activeMenu(pathname)
        }
    }, [pathname])

    const menus = [
        {name: "Dashboard", icon: "", url: "/"},
        {name: "Appliances", icon: "", url: "/"},
        {name: "Analytics", icon: "", url: "/"},
        {name: "Energy Plan", icon: "", url: "/"},
    
    ]
    const activeMenu = (path: string):void =>{
        let page = path.split("/")
        setPage(page[page.length - 1])
    }
    const isPageSameAsPAthname = () =>{
        let current = pathname.split("/")
        if(page == current[current.length - 1]) return true
        return false
    }

    return(
        <div className="hover:overflow-auto h-[calc(100vh-80px)] box-border px-3 py-6">
            <div className={classJoiner("flex flex-col h-[2000px]", props.class)}>
                {menus.map(menu=>{
                    if(page == menu.name){
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