import { MouseEventHandler } from "react"

type settings = {
    children: React.ReactNode
    click?: MouseEventHandler
}
const SettingsBackground = ({children, click}:settings) =>{
    return(
        <div className="absolute top-0 left-0 bg-neutral-900/75 w-full h-full z-30 flex flex-col justify-center items-center" onClick={click}>
            {children}
        </div>
    )
}

export default SettingsBackground