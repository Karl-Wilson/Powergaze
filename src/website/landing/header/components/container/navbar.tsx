import Nav from "@/src/common/components/container/nav"
import { classJoiner } from "@/src/common/utils/helper"

type navbar = {
    class?: string
}
const Navbar = (props: navbar) =>{
    let value = [{name: "Home", url: "/"}, {name: "About", url: "/about"}]
    return(
        <Nav menu={value} class={classJoiner("flex flex-col md:flex-row items-center w-full px-4", props.class)} linkClass="py-2 md:pr-8 hover:text-btnColor"/>
    )
}

export default Navbar