import { database } from "../config/appConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./config";
class FirebaseDB implements database {
    createUser = (email: string, password: string) => {
        let result: {user: object, error:object} = {user:{}, error:{}}
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            result.user = userCredential.user;
        })
        .catch((error) => {
            result.error = error
        });
        return result;
    };
    signIn = (email: string, password: string) =>{
        let result: {user: object, error:object} = {user:{}, error:{}}
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            result.user = userCredential.user;
        })
        .catch((error) => {
            result.error = error
        });
        return result;
    }
    signOut = () =>{
        let result = {isSignedOut: false, error: {}}
        signOut(auth).then(() => {
            result.isSignedOut = true
          }).catch((error) => {
            result.error = error
          });
          return result
    }
    isUserSignedIn = () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              const uid = user.uid;
              return true
            }
           
          }); 
          return false
    }
    
}

export default FirebaseDB
