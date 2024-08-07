import FirebaseDB from "./firebase";
import DBConfig from "./config";


const initFirebaseDB = new DBConfig()
initFirebaseDB.setDB(new FirebaseDB())
//init another database like mongoDB etc

const DATABASE = initFirebaseDB.getDB();

export default DATABASE;
