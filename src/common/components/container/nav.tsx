import Link from "next/link"
import { classJoiner } from "../../utils/helper"

type nav = {
    menu: {name: string, url: string}[]
    class?: string
}


const Nav = (props: nav) =>{
    return(
        <nav className={classJoiner("flex flex-row items-center w-full px-4", props.class)}>
            {props.menu.map(menu=>{
                return <Link href={menu.url} key={menu.url + "" + menu.name} className="pr-2">{menu.name}</Link>
            })}

        </nav>
    )
}

export default Nav