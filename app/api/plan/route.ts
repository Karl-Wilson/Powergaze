import { getOneDoc } from "@/src/common/database/firebase"
import { db } from "@/src/common/firebase/config"
import { DocumentData } from "firebase/firestore"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    //check for user id
    let result:DocumentData
    try{
        const content = await request.json()
        //change data labels from day, month and year, to label or axis
           result = await getOneDoc(db, "test", "plan")

           return NextResponse.json({data: result.plan, error: null}, {status: 200})
    }catch(error){
        return NextResponse.json({data: null, error: error}, {status: 200})
    }
}