import { db } from "./firebase";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  query,
  getDocs,
  where
} from "firebase/firestore";

export const publishMatchingAlert =async (
  userId: string,
  petId: string,
  whatsAppNumber: string,
  address: string,
) => {

    console.log(petId,"\n")
  try {
    const petDoc = doc(db,"users",userId,"pets",petId)
    const petSnap = await getDoc(petDoc)

    if(!petSnap){
        throw new Error("Pet Not Found")
    }

    const petData =  petSnap.data()

    const MatchingAlert = {
        userId,
        petId,
        petName:petData?.name,
        address:address,
        whatsAppNum:whatsAppNumber,
        gender:petData?.gender,
        age:petData?.age,
        image:petData?.imageUrl,
        type:petData?.type,
        vaccinated:petData?.vaccinated,
        breed:petData?.breed,
        status:"Active"
    } 

    const alertRef = await addDoc(collection(db,"alerts"),MatchingAlert)

    return alertRef.id
   
  } catch (error) {
    console.log(error)
     throw new Error("Failed to publish alert");
  }
};


export const getActiveAlerts = async (userId: string): Promise<any[]> => {
  try {
    const alertsRef = collection(db, "alerts");

    const q = query(alertsRef, where("userId", "==", userId));

    const querySnapshot = await getDocs(q);

    const alerts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return alerts;
  } catch (error) {
    console.error(error);
    return [];  
  }
}