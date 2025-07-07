
import { initializeApp ,getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmu8AkWUOIEOo-EuYIdHviK7E5tvnTs9g",
  authDomain: "interviewprep-62aa2.firebaseapp.com",
  projectId: "interviewprep-62aa2",
  storageBucket: "interviewprep-62aa2.firebasestorage.app",
  messagingSenderId: "854690423926",
  appId: "1:854690423926:web:f6700a62d3e7cd35986b57",
  measurementId: "G-6BW6ZDXZLR"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);