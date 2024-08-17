import { classJoiner } from "@/src/common/utils/helper"
import MenuLogo from "../container/menuLogo"
import Nav from "../container/nav"
import { useSelector } from "react-redux"
import { RootState } from "@/src/web_app/common/store/store"
type navLayout = {
    class?: string
}
const NavLayout = (props:navLayout) =>{
    const notifications = useSelector((state:RootState)=>state.dashboard.notification)
    return(
        <div className={classJoiner("flex flex-row items-center justify-between md:justify-end w-full", props.class)}>
            <MenuLogo/>
            <Nav notifications={notifications}/>
        </div>
    )
}
 export default NavLayout