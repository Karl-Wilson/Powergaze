import Logo from "@/src/common/components/core/logo"
import { RootState } from "@/src/web_app/common/store/store"
import { classJoiner } from "@/src/common/utils/helper"
import useSidemenu from "@/src/web_app/common/hooks/sidemenu"
import { useSelector } from "react-redux"

const SidebarHeader = () =>{
    const {isMenuVisible} = useSidemenu()
    return(
        <div className={classJoiner("flex flex-row items-center justify-center w-full h-20 box-border border-b border-btnColor border-solid transition-all md:p-3", isMenuVisible? "p-3" : "p-0")}>
            <Logo logo="logo.png" class="w-36 h-auto"/>
        </div>
    )
}

export default SidebarHeader