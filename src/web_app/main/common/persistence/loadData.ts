import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import DBConnect from "./dbConnect"

const useLoadData = (url:string, action: ActionCreatorWithPayload<any>) =>{
    let firstLoad = useRef(false)
    let [isLoading, setLoading] = useState(true)
    let dispatch = useDispatch()
    useEffect(() => {
        if(!firstLoad.current) {
            setLoading(true)
            DBConnect(url).then(data=>{
                dispatch(action(data.data))
                setLoading(false)
            }).catch(error=>{
                console.error(error)
                setLoading(false)
            })
        }
        firstLoad.current = true
      
    }, [])
    return {isLoading}
}

export default useLoadData