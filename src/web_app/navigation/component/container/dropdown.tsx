import AUTH from "@/src/common/authentication/initialize"
import DATABASE from "@/src/common/database/initialization"
import { lato } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"

type dropdown = {
    data?: {message?: string, date?: string}[] | [],
}
const Dropdown = (props: dropdown) =>{
    return(
        <div>
            {props.data?.map(item=>{
                return (
                    <div className={classJoiner("py-2 px-3 w-60 border-b border-solid border-neutral-200 hover:text-btnColor", lato.className)} key={item.message+"notify"}>
                        <p className="">{item.message}</p>
                        <p className="text-xs text-neutral-500">{item.date}</p>
                    </div>
                
            )
            })}
            {(props.data != undefined && props.data?.length <=0)  && 
            <div className={classJoiner("py-3 px-4 text-nowrap", lato.className)}>
                    <p className="text-neutral-500 italic">No notification</p>
                </div>
            }

        </div>
    )
}
export default Dropdown

export const UserDropdown = () =>{
    const click = () =>{
        AUTH.signOut()
    }
    return(
        <div className={classJoiner("py-2 px-3 text-nowrap hover:text-btnColor", lato.className)}>
            <p onClick={click}>Sign Out</p>
        </div>
    )
}