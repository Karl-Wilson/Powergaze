import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { DB } from "./config";
import { db } from "../firebase/config";

const getOneDoc = async (db:any, database: string, document: string) =>{
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
            getSubCollectionDocs(db, "user", userId, "consumption").then((result)=>{
                console.log(result)
            }).catch((error)=>{
                throw error
            })
        }catch(error){
            console.error(error)
        }   
    }
    getStatus = async(userId: string) =>{
        try{
            getSubCollectionDocs(db, "user", userId, "appliance_status").then((result)=>{
                console.log(result)
            }).catch((error)=>{
                throw error
            })
        }catch(error){
            console.error(error)
        }
    }
    getTarrif = async (userId: string) =>{
        try{
            getSubCollectionDocs(db, "user", userId, "user_tarriff").then((result)=>{
                console.log(result)
            }).catch((error)=>{
                throw error
            })
        }catch(error){
            console.error(error)
        }
    }
    getEnergyPlan = async (userId: string) => {
        try{
            getSubCollectionDocs(db, "user", userId, "energy_plan").then((result)=>{
                console.log(result)
            }).catch((error)=>{
                throw error
            })
        }catch(error){
            console.error(error)
        }
    }
    getUserAppliances = async (userId: string) =>{
        try{
            getSubCollectionDocs(db, "user", userId, "user_appliances").then((result)=>{
                console.log(result)
            }).catch((error)=>{
                throw error
            })

        }catch(error){
            console.error(error)
        }
    }
    getUserLog = async (userId: string) =>{
        try{
            getSubCollectionDocs(db, "user", userId, "user_log").then((result)=>{
                console.log(result)
            }).catch((error)=>{
                throw error
            })

        }catch(error){
            console.error(error)
        }
    }
    setConsumption = (userid: string, data: {date: string, app_id:string, usage: number}) =>{
        try{
            addDocument(db, "user", userid, "consumption", data).then((data)=>{
                console.log((data))
            }).catch((error)=>{
                throw error
            })
        }catch(error){
            console.error(error)
        }
    }
    setStatus = (userid: string, data: {date: string, app_id:string, status: boolean, time: string}) =>{
        try{
            addDocument(db, "user", userid, "appliance_status", data).then((data)=>{
                console.log((data))
            }).catch((error)=>{
                throw error
            })
        }catch(error){
            console.error(error)
        }
    }
    setTarrif = (userid: string, data: {date: string, tarriff:string}) =>{
        try{
            addDocument(db, "user", userid, "user_tarriff", data).then((data)=>{
                console.log((data))
            }).catch((error)=>{
                throw error
            })
        }catch(error){
            console.error(error)
        }
    }
    setUserAppliances = (userid: string, data: {date: string, app_id:string, cat_id: string}) =>{
        try{
            addDocument(db, "user", userid, "user_appliances", data).then((data)=>{
                console.log((data))
            }).catch((error)=>{
                throw error
            })
        }catch(error){
            console.error(error)
        }
    }
    setEnergyPlan = (userid: string, data: {date: string, name:string, action: string, unit: string, cost: number, isActive: boolean}) =>{
        try{
            addDocument(db, "user", userid, "energy_plan", data).then((data)=>{
                console.log((data))
            }).catch((error)=>{
                throw error
            })
        }catch(error){
            console.error(error)
        }
    }
    setUserLog = (userid: string, data: {date: string, action: string, time: string}) =>{
        try{
            addDocument(db, "user", userid, "user_log", data).then((data)=>{
                console.log((data))
            }).catch((error)=>{
                throw error
            })
        }catch(error){
            console.error(error)
        }
    }
}

export default FirebaseDB