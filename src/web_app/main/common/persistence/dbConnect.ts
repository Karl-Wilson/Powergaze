import { auth } from "@/src/common/firebase/config";

const DBConnect = async (url: string) =>{
    const userId = auth.currentUser!.uid
    const wait = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ userId: userId }),
      })
      return wait.json()
}

export default DBConnect