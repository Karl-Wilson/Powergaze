import DBConfig from "./config";
import FirebaseDB from "./firebase";

const initDB = new DBConfig()
initDB.setDB(new FirebaseDB())

const DATABASE = initDB.getDB();

export default DATABASE;