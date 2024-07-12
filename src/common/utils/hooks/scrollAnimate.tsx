import { LegacyRef, useEffect } from "react"
import { onscroll, triggerEvent } from "../helper"
const useScrollAnimate = (ref:any, action:()=>void, visibility: boolean) =>{
    useEffect(() => {
        let eventName = "scroll"
        let element = ref.current! as HTMLElement
        window.addEventListener(eventName, ()=>onscroll(element, action, visibility))
        //trigger event pprogrammatically
        triggerEvent(eventName)
        return () => {
          window.removeEventListener(eventName, ()=>onscroll(element, action, true))
        }
      }, [])
}

export default useScrollAnimate