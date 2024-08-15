import { getOneDoc } from "@/src/common/database/firebase"
import { db } from "@/src/common/firebase/config"
import { DocumentData } from "firebase/firestore"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    //check for user id
    let result:DocumentData

    try{
        const content = await request.json()
           result = await getOneDoc(db, "test", "usage_by_category")
           let keys = Object.keys(result)
           let newResult: any[] = []

           keys.map(item=>{
            let arrayData = []
            arrayData.push(item)
            arrayData.push(result[item])
            newResult.push(arrayData)
           })
           //add data label
           newResult.unshift(["Category", "Usage"])
           //final result
           //newResult: [category, usage][]
           return NextResponse.json({data: newResult, error: null}, {status: 200})
    }catch(error){
        return NextResponse.json({data: null, error: error}, {status: 200})
    }
}