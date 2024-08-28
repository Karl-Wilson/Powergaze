import Logo from "@/src/common/components/core/logo"
import Menu from "../core/menu"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { setMenuVisibility } from "@/src/web_app/common/store/reducer/reducer"
import { RootState } from "@/src/web_app/common/store/store"
import useSidemenu from "@/src/web_app/common/hooks/sidemenu"


const MenuLogo = () =>{
    const {click} = useSidemenu()
    return(
        <div className="md:hidden flex flex-row items-center">
            <Menu icon="../menu.svg" click={click} class="mr-6"/>
            <Link href="/"><Logo logo="../dash_logo.png" class="w-36 h-auto"/></Link>
        </div>
    )
}

export default MenuLogo