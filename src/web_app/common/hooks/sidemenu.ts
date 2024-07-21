import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/src/web_app/common/store/store"
import { setMenuVisibility } from "@/src/web_app/common/store/reducer/reducer"
const useSidemenu = () =>{
    const isMenuVisible = useSelector((state: RootState)=>state.app.isMenuVisible)
    const dispatch = useDispatch()
    const click = () =>{
        if(isMenuVisible == true){
            dispatch(setMenuVisibility(false))
        }else{
            dispatch(setMenuVisibility(true))
        }
    }
    return {click, isMenuVisible}
}
export default useSidemenu