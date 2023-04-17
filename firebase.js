// Import the functions you need from the SDKs you need
//import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from "@firebase/firestore";
import { getMessaging } from "firebase/messaging";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ6FsKKYeJc_MIrSDBFKECQsG9JSIDDvw",
  authDomain: "my-taxi-booking-applicat-9b534.firebaseapp.com",
  projectId: "my-taxi-booking-applicat-9b534",
  storageBucket: "my-taxi-booking-applicat-9b534.appspot.com",
  messagingSenderId: "760227027291",
  appId: "1:760227027291:web:35cf590ec3fa8668cda27e",
  measurementId: "G-3R72VWH1QB"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    const app = firebase.initializeApp(firebaseConfig);
} else {
    app=firebase.app()
}

const db = getFirestore(app);
//const messaging = getMessaging(app);

const auth = firebase.auth()
export{auth};
export{db};
//export{messaging};


