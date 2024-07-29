import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { setCreatePlan, setUpdatePlan } from "../store/reducer/reducer"
export const useCreatePlan = () =>{
    const dispatch = useDispatch()
    let isCreatePlan = useSelector((state: RootState)=> state.app.createPlan)
    const setCreatePlanVisibility = (visibility: boolean) =>{
            dispatch(setCreatePlan(visibility))
    }
    return {isCreatePlan, setCreatePlanVisibility}
}

export const useUpdatePlan = () =>{
    const dispatch = useDispatch()
    let isUpdatePlan = useSelector((state: RootState)=> state.app.updatePlan)
    const setUpdatePlanVisibility = (visibility: boolean) =>{
            dispatch(setUpdatePlan(visibility))
    }
    return {isUpdatePlan, setUpdatePlanVisibility}
}
