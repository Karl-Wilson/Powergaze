import { gazeAuth } from "./config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { error } from "console";

//all firebase auth functions are async functions
class FirebaseAuth implements gazeAuth {
    createUser = async (email: string, password: string) => {
        let result: {user: string | null, error: string | null} = {user:null, error:null}
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("signed up")
            result.user = userCredential.user.uid;
        })
        .catch((error) => {
            console.log("error")
            result.error = error.code
        });
        return result;
    };

    signIn = async (email: string, password: string) =>{
        let result: {user: string | null, error: string | null} = {user: null, error: null}
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            let user = userCredential.user.uid
            result.user = user
        }).catch((error) => {
            result.error = error.code
        });
        return result;
    }
    signOut = () =>{
        signOut(auth).catch((error) => {
            console.log(error)
          });
    }
    isUserSignedIn = () =>{
        let result = false
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              const uid = user.uid;
              console.log(uid)
              result = true
              console.log(result, "inside")
            }
           console.log(result, "inside")
          }); 
    }
    
}

export default FirebaseAuth
