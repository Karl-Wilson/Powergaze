import Logo from "@/src/common/components/core/logo"
import { RootState } from "@/src/web_app/common/store/store"
import { classJoiner } from "@/src/common/utils/helper"
import useSidemenu from "@/src/web_app/common/hooks/sidemenu"
import { useSelector } from "react-redux"
import Link from "next/link"

const SidebarHeader = () =>{
    const {isMenuVisible} = useSidemenu()
    return(
        <div className={classJoiner("flex flex-row items-center justify-center w-full h-20 box-border border-b border-btnColor border-solid transition-all md:p-3", isMenuVisible? "p-3" : "p-0")}>
            <Link href="/"><Logo logo="../dash_logo.png" class="w-36 h-auto"/></Link>
        </div>
    )
}

export default SidebarHeader