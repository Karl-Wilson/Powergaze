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
           result = await getOneDoc(db, "test", "consumption")
           tariff = await getOneDoc(db, "test", "tariff")
           let keys = Object.keys(result)
           keys.map(item=>{
            result[item]["cost"] = result[item].energy * tariff["uk"]
           })
           return NextResponse.json({data: result, error: null}, {status: 200})
    }catch(error){
        return NextResponse.json({data: null, error: error}, {status: 200})
    }
}