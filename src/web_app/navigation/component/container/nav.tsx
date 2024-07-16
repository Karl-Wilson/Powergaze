import Badge from "../core/badge"

const Nav = () =>{
    return(
        <div className="flex flex-row items-center">
            <Badge icon="notification.png" count={10} class="pr-4"/>
            <Badge icon="user.png"/>
        </div>
    )
}

export default Nav