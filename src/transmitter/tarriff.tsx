import DATABASE from "../common/database/initialization"
import { auth } from "../common/firebase/config"
import SenderButtons from "./core"
import { useDisplayMessage } from "./hook"

const Tarriff = () =>{
    const {msg, message} = useDisplayMessage()
    const click = () =>{
        let date = new Date().toString()
        let setTarriff = DATABASE.setTarrif
        let userId = auth.currentUser!.uid
        let tariff = {date: date, tariff: 3}
        if(setTarriff){
            setTarriff(userId, tariff).then((data)=>{
                message(data, "added")
            }).catch((error)=>{
                message("", error)
            })
        }
    }
    return(
        <SenderButtons label="Send Tarrif" msg={msg} click={click}/>
    )
}

export default Tarriff;