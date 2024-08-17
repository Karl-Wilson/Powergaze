import Switch, { switchType } from "@/src/common/components/core/switch";
import { setApplianceStatus } from "@/src/web_app/common/store/reducer/dashboardReducer";
import { useDispatch } from "react-redux";
type wrapper = {
    data: {name: string, status: boolean, usage: number, cost: number}[] | []
    name: string
}
const SwitchProxy = (props: switchType & wrapper) =>{
    const dispatch = useDispatch()
    const action = () =>{
        let data = [...props.data]
        for(let i=0; i<data.length;i++){
            let item = data[i]
            let newMap = {...item}
            if(item.name == props.name){
                if(item.status){
                    newMap.status = false
                }else{
                    newMap.status = true
                }  
            }
            data[i] = newMap  
        }
        dispatch(setApplianceStatus(data))
    }
    return(
        <Switch {...props} action={action}/>
    )
}
export default SwitchProxy