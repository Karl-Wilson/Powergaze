"use client"
import { useEffect } from "react"
import SidebarLayout from "../component/layout/sidebarLayout"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../common/store/store"
import { classJoiner } from "@/src/common/utils/helper"
import { setMenuVisibility } from "../../common/store/reducer/reducer"
import useSidemenu from "../../common/hooks/sidemenu"

const Sidebar = () =>{
const {click, isMenuVisible} = useSidemenu()

    return(
        <>
            <div className={classJoiner("absolute top-0 left-0 z-20 md:relative md:w-[322px] transition-all duration-500 h-screen box-border bg-dashboard-primary text-white", 
                isMenuVisible? "w-8/12" : "w-0"
            )}>
                <SidebarLayout/>
            </div>
            <div onClick={click} className={classJoiner("cursor-pointer absolute top-0 left-0 z-10 w-screen h-screen bg-neutral-950/80", 
                isMenuVisible? "block" : "hidden"
            )}></div>
        </>
        
    )
}

export default Sidebar