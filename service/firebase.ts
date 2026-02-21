import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
//@ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"



const firebaseConfig = {
  apiKey: "AIzaSyCUlcwAfG6gSy8dN2pTiyduDVdeo87exHM",
  authDomain: "tail-mate.firebaseapp.com",
  projectId: "tail-mate",
  storageBucket: "tail-mate.firebasestorage.app",
  messagingSenderId: "376899558687",
  appId: "1:376899558687:web:0103f64bb5c8fc168fe42a"
}

const app  = initializeApp(firebaseConfig)

export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app)