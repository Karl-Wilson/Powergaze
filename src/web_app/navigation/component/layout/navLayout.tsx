import { classJoiner } from "@/src/common/utils/helper"
import MenuLogo from "../container/menuLogo"
import Nav from "../container/nav"
type navLayout = {
    class?: string
}
const NavLayout = (props:navLayout) =>{
    const notifications: any[] = [
        {message: "New feature added", date: "Today"},
        {message: "Changes made", date: "Yesterday"},

    ]
    return(
        <div className={classJoiner("flex flex-row items-center justify-between md:justify-end w-full", props.class)}>
            <MenuLogo/>
            <Nav notifications={notifications}/>
        </div>
    )
}
 export default NavLayout