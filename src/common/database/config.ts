export type DB = {
    setConsumption?: (userid: string, data: any)=> Promise<any>
    setStatus?: (userid: string, data: any)=> Promise<any>
    setTarrif?:  (userid: string, data: any)=>Promise<any>
    setUserAppliances?: (userid: string, data: any) => Promise<any>
    setEnergyPlan?: (userid: string, data: any)=>Promise<any>
    setUserLog?: (userid: string, data: any)=>Promise<any>
    getConsumption?: (userId: string)=> Promise<any>
    getStatus?: (userId: string)=> Promise<any>
    getTarrif?:  (userId: string)=>Promise<any>
    getUserAppliances?: (userId: string) => Promise<any[]>
    getEnergyPlan?: (userId: string)=>Promise<any>
    getUserLog?: (userid: string)=>Promise<any>
    updateConsumption?: (userid: string, updateDoc: string, data:any)=>Promise<void>

}

class DBConfig {
    db!: DB;

    setDB(db:DB){
        this.db = db
    }

    getDB():DB{
        return this.db;
    }

}

export default DBConfig