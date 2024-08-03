import FirebaseDB from "../firebase/persistence";
import DBConfig from "./appConfig";

const initFirebaseDB = new DBConfig()
initFirebaseDB.setDB(new FirebaseDB())

//init another database like mongoDB etc

const DATABASE = initFirebaseDB.getDB();

export default DATABASE;
