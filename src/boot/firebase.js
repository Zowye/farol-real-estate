import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { setupAuthListener } from "./authWatcher";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwEqjVfPpoysBJ7msrxfzSOzxGtOsOHcM",
  authDomain: "farol-real-estate.firebaseapp.com",
  projectId: "farol-real-estate",
  storageBucket: "farol-real-estate.appspot.com",
  messagingSenderId: "811087448019",
  appId: "1:811087448019:web:f4c2a556a76d5d29759126",
  measurementId: "G-CWV34TRKW2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

setupAuthListener();
