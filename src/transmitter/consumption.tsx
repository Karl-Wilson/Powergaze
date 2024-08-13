import DATABASE from "@/src/common/database/initialization"
import { auth } from "@/src/common/firebase/config"
import SenderButtons from "./core"
import { useDisplayMessage } from "./hook"

const Consumption = () =>{
    const {msg, message} = useDisplayMessage()

    const click = () =>{
        const userId = auth.currentUser!.uid

        //get appliances, loop through and send 
        if(userId){
            let date = new Date().toString()
            let setConsumption = DATABASE.setConsumption
            let consumption = [
                {date: date, app_id: "3Sr26rFgAroxdlD6LRFe", usage: 6.5},
                {date: date, app_id: "CrkNQgbrqw9UrSx4aDo0", usage: 8.5},
                {date: date, app_id: "PbRE7sBiRX94udhJD8W0", usage: 10.5},
                {date: date, app_id: "oU3H1pZVRmZOw14PoDps", usage: 15.5},
            ]
            
            consumption.map((item)=>{
                if(setConsumption){
                    setConsumption(userId, item).then((result)=>{
                        message(result, "added")
                    }).catch((error)=>{
                        console.log(error)
                    })
                }
            })
            
        }
    }
    return(
        <SenderButtons label="Send consumption data" click={click} msg={msg}/>
    )
}

export default Consumption