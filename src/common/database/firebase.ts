import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { DB } from "./config";
import { db } from "../firebase/config";

export const getOneDoc = async (db:any, database: string, document: string) =>{
        const docRef = doc(db, database, document);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
        // docSnap.data() will be undefined in this case
            throw "No such document!";
        }
}
const getMultipleDoc = async (db:any, database: string, userId: string) =>{
    const q = query(collection(db, database), where("userid", "==", userId));
    const querySnapshot = await getDocs(q);
    let result: any[] = []
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        result.push(doc.data())
        console.log(doc.id, " => ", doc.data());
    });
    return result;
}

const getSubCollectionDocs = async(db: any, database: string, userId: string, subDatabase: string) =>{
    const querySnapshot = await getDocs(collection(db, database,  userId, subDatabase));
    let result:any[] = []
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        result.push(doc.data())
        //console.log(doc.id, " => ", doc.data());
    });
    return result
}

const addDocument = async (db:any, database:string, userId:string, subCollection: string, data:{}) =>{
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, database, userId, subCollection), {
        ...data
    });
    return docRef.id
}

class FirebaseDB implements DB {
    getConsumption = async (userId: string) =>{
        try{
           return await getSubCollectionDocs(db, "user", userId, "consumption")
        }catch(error){
            throw error
        }  
    }
    getStatus = async(userId: string) =>{
        try{
            return await getSubCollectionDocs(db, "user", userId, "appliance_status")
        }catch(error){
            throw error
        }
    }
    getTarrif = async (userId: string) =>{
        try{
            return await getSubCollectionDocs(db, "user", userId, "user_tariff")
        }catch(error){
            throw error
        }
    }
    getEnergyPlan = async (userId: string) => {
        try{
            return await getSubCollectionDocs(db, "user", userId, "energy_plan")
        }catch(error){
            throw error
        }
    }
    getUserAppliances = async (userId: string) =>{
        try{
            return await getSubCollectionDocs(db, "user", userId, "user_appliances")
        }catch(error){
            throw error
        }
    }
    getUserLog = async (userId: string) =>{
        try{
            return await getSubCollectionDocs(db, "user", userId, "user_log")
        }catch(error){
            console.error(error)
        }
    }

    setConsumption = async (userid: string, data: {date: string, app_id:string, usage: number}) =>{
        try{
            return await addDocument(db, "user", userid, "consumption", data)
        }catch(error){
            throw error
        }
    }
    setStatus = async (userid: string, data: {date: string, app_id:string, status: boolean}) =>{
        try{
            return await addDocument(db, "user", userid, "appliance_status", data)
        }catch(error){
            throw error
        }
    }
    setTarrif = async (userid: string, data: {date: string, tarriff:string}) =>{
        try{
            return await addDocument(db, "user", userid, "user_tariff", data)
        }catch(error){
            throw error
        }
    }
    setUserAppliances = async (userid: string, data: {date: string, app_id:string, cat_id: string}) =>{
        try{
            return await addDocument(db, "user", userid, "user_appliances", data)
        }catch(error){
            throw error
        }
    }
    setEnergyPlan = async (userid: string, data: {date: string, name:string, action: string, unit: string, cost: number, isActive: boolean}) =>{
        try{
            return await addDocument(db, "user", userid, "energy_plan", data)
        }catch(error){
            throw error
        }
    }
    setUserLog = async (userid: string, data: {date: string, action: string, time: string}) =>{
        try{
            return await addDocument(db, "user", userid, "user_log", data)
        }catch(error){
            throw error
        }
    }
}

export default FirebaseDB