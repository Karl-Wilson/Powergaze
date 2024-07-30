import { useState } from "react"

const useMenu = () =>{
    const [display, setDisplay] = useState<string>("hidden")
    const click = () =>{
        if(display == "hidden"){
            setDisplay("block")
        }else{
            setDisplay("hidden")
        }
        
    }
    return {display, click}
}

export default useMenu