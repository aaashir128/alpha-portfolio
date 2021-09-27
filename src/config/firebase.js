import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8blHKkfa20DM30MaH9yLEK2KjuNwVaS8",
  authDomain: "el-portfolio-web.firebaseapp.com",
  projectId: "el-portfolio-web",
  storageBucket: "el-portfolio-web.appspot.com",
  messagingSenderId: "782944508605",
  appId: "1:782944508605:web:f3af4f5f37123c467e75d4",
  measurementId: "G-XBYJ95Q9NG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { auth, provider, storage };
export default db;
