import { getApps, initializeApp, getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRheiqiH2bJGJlMmAFCdtcbqIBaxnNh0M",
  authDomain: "bike-45741.firebaseapp.com",
  projectId: "bike-45741",
  storageBucket: "bike-45741.appspot.com",
  messagingSenderId: "482823467043",
  appId: "1:482823467043:web:43c011afd547ee92f10196",
//   measurementId: "G-SL7M2EN5NZ"
};

const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
const auth = getAuth();
const firestoreDb=getFirestore(app)
const storage = getStorage(app);
export{ app,auth,firestoreDb,storage};