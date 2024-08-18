import Logo from "@/src/common/components/core/logo"
import { RootState } from "@/src/web_app/common/store/store"
import { classJoiner } from "@/src/common/utils/helper"
import useSidemenu from "@/src/web_app/common/hooks/sidemenu"
import { useSelector } from "react-redux"
import Link from "next/link"

const SidebarHeader = () =>{
    const {isMenuVisible} = useSidemenu()
    return(
        <div className={classJoiner("flex flex-row items-center justify-center h-20 box-border border-b border-[#54517C] border-solid transition-all md:p-3 md:w-full", isMenuVisible? "p-3 w-full" : "p-0 w-0")}>
            <Link href="/"><Logo logo="../dash_logo.png" class={classJoiner("h-auto md:w-36", isMenuVisible? "w-36" : "w-0" )}/></Link>
        </div>
    )
}

export default SidebarHeader