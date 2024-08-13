import DATABASE from "../common/database/initialization"
import { auth } from "../common/firebase/config"
import SenderButtons from "./core"
import { useDisplayMessage } from "./hook"

const Status = () =>{
    const {msg, message} = useDisplayMessage()
    const click = () =>{
        let date = new Date().toString()
        let setStatus = DATABASE.setStatus
        let userId = auth.currentUser!.uid
        let status = [
            {date: date, app_id: "3Sr26rFgAroxdlD6LRFe", status: true},
            {date: date, app_id: "CrkNQgbrqw9UrSx4aDo0", status: true},
            {date: date, app_id: "PbRE7sBiRX94udhJD8W0", status: true},
            {date: date, app_id: "oU3H1pZVRmZOw14PoDps", status: false},
        ]
        if(setStatus){
            status.map(item=>{
                setStatus(userId, item).then((data)=>{
                    message(data, "added")
                }).catch(error=>{
                    message("", error)
                })
            })
            
        }
    }
    return(
        <SenderButtons label="Send Appliance Status" msg={msg} click={click}/>
    )
}

export default Status