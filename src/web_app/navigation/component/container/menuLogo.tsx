import Logo from "@/src/common/components/core/logo"
import Menu from "../core/menu"
import Link from "next/link"

const MenuLogo = () =>{
    const click = () =>{

    }
    return(
        <div className="md:hidden flex flex-row items-center">
            <Menu icon="menu.png" click={click} class="mr-6"/>
            <Link href="/"><Logo logo="logo.png" class="w-36 h-auto"/></Link>
        </div>
    )
}

export default MenuLogo