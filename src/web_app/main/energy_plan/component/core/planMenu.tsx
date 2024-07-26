import Menu from "@/src/common/components/core/menu"
import { MouseEventHandler } from "react"
type menu ={
    click?: MouseEventHandler
}
const PlanMenu = (props: menu) =>{
    return(
        <Menu icon="../more_vert.svg" class="relative" dropdownClass="right-0 bg-white">
                <div className="w-36 flex flex-row items-center hover:text-btnColor cursor-pointer" onClick={props.click}>Settings</div>
        </Menu>
    )
}
export default PlanMenu