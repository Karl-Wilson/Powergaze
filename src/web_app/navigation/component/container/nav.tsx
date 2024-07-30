import Badge from "../core/badge"
import Dropdown, { UserDropdown } from "./dropdown"
import NotificationDropdown from "./dropdown"
type nav = {
    notifications?: string[] | [],
    user?: ["Sign Out"]
}
const Nav = (props: nav) =>{
    return(
        <div className="flex flex-row items-center">
            <Badge icon="../notifications.svg" count={10} class="mr-2">
                <Dropdown data={props.notifications}/>
            </Badge>
            <Badge icon="../person.svg">
                <UserDropdown/>
            </Badge>
        </div>
    )
}

export default Nav