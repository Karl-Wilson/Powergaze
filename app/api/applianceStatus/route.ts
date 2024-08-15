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
           result = await getOneDoc(db, "test", "status")
           tariff = await getOneDoc(db, "test", "tariff")
           result.status.map((item: any)=>{
            let cost = item.usage * tariff["uk"]
            item["cost"] = parseFloat(cost.toFixed(2))
           })
           return NextResponse.json({data: result.status, error: null}, {status: 200})
    }catch(error){
        return NextResponse.json({data: null, error: error}, {status: 200})
    }
}