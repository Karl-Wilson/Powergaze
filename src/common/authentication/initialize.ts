import FirebaseAuth from "./firebase";
import AuthConfig from "./config";


const initAuth = new AuthConfig()
initAuth.setAuth(new FirebaseAuth())
//init another database like mongoDB etc

const AUTH = initAuth.getAuth();

export default AUTH;
