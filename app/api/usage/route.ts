import { getOneDoc } from "@/src/common/database/firebase"
import { db } from "@/src/common/firebase/config"
import { DocumentData } from "firebase/firestore"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    //check for user id
    let result:DocumentData
    let tariff:DocumentData
    try{
        const content = await request.json()
        //change data labels from day, month and year, to label or axis
           result = await getOneDoc(db, "test", "usage")
           tariff = await getOneDoc(db, "test", "tariff")
           let keys = Object.keys(result)
            let dataLabel = ""
            //loop through the keys to access the result's values
           keys.map(key=>{
                let arrayData = result[key]
                let converted: any[] = []
                if(key == "Daily"){
                    dataLabel = "day"
                }else if(key ==  "Monthly"){
                    dataLabel = "month"
                }else{
                    dataLabel = "year"
                }
                //loop through each keys values, add the objects into an array, 
                //and push that array into converted which holds the final result
                arrayData.map((data:any)=>{
                    let ree = []
                    ree.push(data[dataLabel])
                    ree.push(data.usage)
                    let cost  = data.usage * tariff["uk"]
                    ree.push(parseFloat(cost.toFixed(2),))
                    converted.push(ree)
                })
                //then replace the original value with the new value and add data labels at the beginning of the array
                result[key] = converted
                result[key].unshift([key, "Usage", "Cost"])
                // final data structure
                //result: {Daily:[day,usage,cost][], Monthly:[month,usage,cost][], Yearly:[year,usage,cost][] }
           })
    
           return NextResponse.json({data: result, error: null}, {status: 200})
    }catch(error){
        return NextResponse.json({data: null, error: error}, {status: 200})
    }
}