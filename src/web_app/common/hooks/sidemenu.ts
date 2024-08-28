import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/src/web_app/common/store/store"
import { setMenuVisibility } from "@/src/web_app/common/store/reducer/reducer"
import { useEffect, useRef } from "react"
const useSidemenu = () =>{
    const isMenuVisible = useSelector((state: RootState)=>state.app.isMenuVisible)
    const dispatch = useDispatch()
    const isMenuVisibleRef = useRef(isMenuVisible)
    const click = () =>{
        if(window.innerWidth<576){
            if(isMenuVisible == true){
                dispatch(setMenuVisibility(false))
                isMenuVisibleRef.current = false
            }else{
                dispatch(setMenuVisibility(true))
                isMenuVisibleRef.current = true
            }
        }
        
    }
    useEffect(() => {
      function resizefunc(isMenuVisible: boolean , dispatch:any, setMenuVisibility:any){
        if(window.innerWidth>576){
            if(isMenuVisible){
                isMenuVisibleRef.current = false
                dispatch(setMenuVisibility(false))
            }
        }
      }

      window.addEventListener("resize", ()=>{resizefunc(isMenuVisibleRef.current, dispatch, setMenuVisibility)})
          
      return () => {
        window.removeEventListener("resize", ()=>{resizefunc(isMenuVisibleRef.current, dispatch, setMenuVisibility)})
      }
    }, [])
    
    return {click, isMenuVisible}
}
export default useSidemenu