
export interface gazeAuth {
    createUser: (email: string, password: string) => Promise<{user: string | null, error: string | null}>
    getUser?: ()=>void
    updateUser?: ()=>void
    updatePassowrd?: ()=>void
    setUserEmail?: ()=>void
    setUserPassword?: ()=>void
    signIn: (email: string, password: string)=> Promise<{user: string | null, error: string | null}>
    signOut: () => {isSignedOut: boolean, error: object};
    isUserSignedIn: ()=> void
}

///strategy design pattern

class DBConfig {
    db!: gazeAuth;

    setDB(db:gazeAuth){
        this.db = db
    }

    getDB():gazeAuth{
        return this.db;
    }

}

export default DBConfig