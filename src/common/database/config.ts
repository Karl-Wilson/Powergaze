export type DB = {
    setConsumption?: (userid: string, data: any)=> void
    setStatus?: (userid: string, data: any)=> void
    setTarrif?:  (userid: string, data: any)=>void
    setUserAppliances?: (userid: string, data: any) => void
    setEnergyPlan?: (userid: string, data: any)=>void
    setUserLog?: (userid: string, data: any)=>void
    getConsumption?: (userId: string)=> void
    getStatus?: (userId: string)=> void
    getTarrif?:  (userId: string)=>void
    getUserAppliances?: (userId: string) => void
    getEnergyPlan?: (userId: string)=>void
    getUserLog?: (userid: string)=>void

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