import { useRef, useState } from "react"
import { auth } from "../common/firebase/config"

export const useDisplayMessage = () =>{
    const [msg, setMsg] = useState<string[]>([])
    const dataRef = useRef<string[]>([])

    const message = (id:string, msg:string) =>{
        let successMsg = [id+" "+msg]
        dataRef.current = dataRef.current.concat(successMsg)
        setMsg(dataRef.current)
    }
    return {msg, message}
}
