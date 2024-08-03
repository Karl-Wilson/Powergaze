import FirebaseDB from "../firebase/persistence"

export interface database {
    createUser?: (email: string, password: string) => {user: object, error: object}
    getUser?: ()=>void
    updateUser?: ()=>void
    updatePassowrd?: ()=>void
    setUserEmail?: ()=>void
    setUserPassword?: ()=>void
    signIn?: (email: string, password: string)=> {user: object, error: object}
    signOut?: ()=> {isSignedOut: boolean, error: object};
    isUserSignedIn?: ()=> boolean
}

///strategy design pattern

class DBConfig {
    db!: database;

    setDB(db:database){
        this.db = db
    }

    getDB():database{
        return this.db;
    }

}

export default DBConfig