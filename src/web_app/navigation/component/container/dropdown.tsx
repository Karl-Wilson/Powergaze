import AUTH from "@/src/common/authentication/initialize"
import DATABASE from "@/src/common/database/initialization"
import { auth } from "@/src/common/firebase/config"
import { lato } from "@/src/common/utils/fonts"
import { classJoiner } from "@/src/common/utils/helper"
import { useEffect, useState } from "react"

type dropdown = {
    data?: {message?: string, date?: string}[] | [],
}
type wrapper = {
    children: React.ReactNode
    wrapperclass?: string
    [key:string]: any
    
}
const Wrapper = ({children, wrapperclass, ...props}: wrapper) =>{
    return(
        <div className={classJoiner("py-2 px-3", lato.className, wrapperclass)} {...props}>
            {children}
        </div>
    )
}
const Dropdown = (props: dropdown) =>{
    return(
        <div>
            {props.data?.map(item=>{
                return (
                    <Wrapper wrapperclass="w-60 border-b border-solid border-neutral-200 hover:text-btnColor" key={item.message+"notify"}>
                        <p className="">{item.message}</p>
                        <p className="text-xs text-neutral-500">{item.date}</p>
                    </Wrapper>
                
            )
            })}
            {(props.data != undefined && props.data?.length <=0)  && 
            <Wrapper wrapperclass="text-nowrap">
                    <p className="text-neutral-500 italic">No notification</p>
                </Wrapper>
            }

        </div>
    )
}
export default Dropdown

export const UserDropdown = () =>{
    const [username, setUserName] = useState(auth.currentUser?.email)
    const click = () =>{
        AUTH.signOut()
    }

    return(
        <>
        <Wrapper wrapperclass="text-nowrap border border-b-neutral-200">
            <p className="p-3 font-bold">{username}</p>
        </Wrapper>
        <Wrapper wrapperclass="text-nowrap hover:text-btnColor flex flex-row" onClick={click}>
            <p>Sign Out</p>
        </Wrapper>
        </>
        
    )
}