
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQWNNfA-plIcJ2RDVOcdh-k6GFwEH_Gho",
  authDomain: "trip-planner-c1fed.firebaseapp.com",
  projectId: "trip-planner-c1fed",
  storageBucket: "trip-planner-c1fed.appspot.com",
  messagingSenderId: "1018626444931",
  appId: "1:1018626444931:web:66c8a13d2e3de1bd1a55b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);