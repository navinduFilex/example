import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth,db } from "./firebase"
import { doc, setDoc } from "firebase/firestore"

export const login = async(email:string,password:string)=>{
    return await signInWithEmailAndPassword(auth,email,password)
}

export const register = async(email:string,password:string,username:string,whatsAppNum:string,address:string)=>{
    try{
        const userCred = await createUserWithEmailAndPassword(auth,email,password)
        await updateProfile(userCred.user,{
            displayName:username,
            photoURL:""
        })
        await sendEmailVerification(userCred.user)

      await setDoc(doc(db,"users",userCred.user.uid),{
            username:username.toLowerCase(),
            role:"",
            email,
            whatsAppNum,
            address,
            emailVerified:false,
            createdAt:new Date()
        })
        return userCred.user
    }catch(error:any){
        if(error.code === "auth/email-already-in-use"){
            throw new Error("Email Already In Use")
        }
        if(error.code === "auth/invalid-email"){
            throw new Error("Invalid Email Address")
        }
        throw new Error("Registration Failed")
    }
}