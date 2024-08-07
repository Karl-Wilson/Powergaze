import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../firebase/config";
import DATABASE from "../../authentication/initialize";


const useAuthStateChange = () =>{
    const [user, setUser] = useState<any>(null)
    if(user == null){
        onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setUser(uid)
        }else{
            setUser(false)
        }
      });
    }
      return {user}
}

export default useAuthStateChange