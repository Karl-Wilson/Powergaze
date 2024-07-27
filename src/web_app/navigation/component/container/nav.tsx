import Badge from "../core/badge"

const Nav = () =>{
    return(
        <div className="flex flex-row items-center">
            <Badge icon="../notifications.svg" count={10} class="pr-4"/>
            <Badge icon="../person.svg"/>
        </div>
    )
}

export default Nav