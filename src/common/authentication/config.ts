
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

class AuthConfig {
    auth!: gazeAuth;

    setAuth(auth:gazeAuth){
        this.auth = auth
    }

    getAuth():gazeAuth{
        return this.auth;
    }

}

export default AuthConfig