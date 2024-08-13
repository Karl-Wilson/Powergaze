import { Send_Flowers } from "next/font/google"
import SenderButtons from "./core"
import { auth } from "../common/firebase/config"
import DATABASE from "../common/database/initialization"
import { useRef, useState, useEffect } from "react"
import { useDisplayMessage } from "./hook"

const UserAppliance = () =>{
    const {msg, message} = useDisplayMessage()
    
    const click = () =>{
        if(auth.currentUser!.uid){
            //before you add user appliances, check if they are added already
            //if yes, do not add, if no, add appliance
            let date = new Date().toString()
            let setUserAppliances = DATABASE.setUserAppliances
            let getUserAppliances = DATABASE.getUserAppliances
            let newAppliances = [
                {app_id: "3Sr26rFgAroxdlD6LRFe", cat_id: "cFPdTKZeYSbPYJZOyleF"}, 
                {app_id: "3zyXZaGdadMWd9jKd04f", cat_id: "H0gpSMbQaztEKWDLtuDP"}, 
                {app_id: "CrkNQgbrqw9UrSx4aDo0", cat_id: "SkED7XBKb7wHvb1WFXf8"}, 
                {app_id: "LoOcQFB6CmxaTmNT8Prd", cat_id: "SkED7XBKb7wHvb1WFXf8"}, 
                {app_id: "PbRE7sBiRX94udhJD8W0", cat_id: "SkED7XBKb7wHvb1WFXf8"},
                {app_id: "oU3H1pZVRmZOw14PoDps", cat_id: "LsYyenqNgiMluK8G0HTI"}
            ]

            if(getUserAppliances){
            
                getUserAppliances(auth.currentUser!.uid).then((data:any[])=>{

                    if(data.length){
                        //loop through new appliances to check if any one is in database already
                        newAppliances.map((appliance: any)=>{
                            let avail = false
                            
                            //loop through appliances from database
                            data.map((item)=>{
                                if(item.app_id == appliance.app_id){
                                    avail = true      
                                }
                            })

                            //if appliance is not in database, add it
                            if(!avail){
                                if(setUserAppliances){
                                    setUserAppliances(auth.currentUser!.uid, {date: date, ...appliance}).then((data:string)=>{
                                        //useState doesnt retain data, use useRef to retain data and set useState with useRef
                                        message(data, "added")
                                    }).catch((error)=>{
                                        console.error(error)
                                    })
                                }
                            }else{
                                //if its already in database
                                message(appliance.app_id, "already in database")
                            }
                        })
                    }else{
                        //if nothing is inside databse, add all new appliance
                        if(setUserAppliances){
                                newAppliances.map((appliance)=>{
                                    setUserAppliances(auth.currentUser!.uid, {date: date, ...appliance}).then((data:string)=>{
                                        //useState doesnt retain data, use useRef to retain data and set useState with useRef
                                        message(data, "added")
                                    }).catch((error)=>{
                                        console.error(error)
                                    })
                                })
                        }
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            }
              
        }
    }

    return(
        <SenderButtons label="set appliance" click={click} msg={msg}/>
    )
}
export default UserAppliance