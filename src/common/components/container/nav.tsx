import Link from "next/link"
import { classJoiner } from "../../utils/helper"

type nav = {
    menu: {name: string, url: string}[]
    class?: string
    linkClass?: string
}


const Nav = (props: nav) =>{
    return(
        <nav className={classJoiner(props.class)}>
            {props.menu.map(menu=>{
                return <Link href={menu.url} key={menu.url + "" + menu.name} className={props.linkClass}>{menu.name}</Link>
            })}

        </nav>
    )
}

export default Nav