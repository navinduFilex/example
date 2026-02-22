import { db } from "./firebase";
import { doc, collection, addDoc, setDoc } from "firebase/firestore";

export const addPet = async (
  userId: string,
  petData: {
    name: string;
    type: string;
    breed?: string;
    age?: string;
    gender: "Male" | "Female";
    vaccinated: boolean;
    imageUri: string,
  },
  
) => {
  try {
    const imageUrl = await uploadPetImage(petData.imageUri, userId);

    const petsCollection = collection(db, "users", userId, "pets");

    const petDocRef = await addDoc(petsCollection, {
      ...petData,
      imageUrl,
      createdAt: new Date(),
    });

    return petDocRef.id;
  } catch (error) {
    console.error("Add pet error:", error);
    throw new Error("Failed to add pet");
  }
};

export const uploadPetImage = async (uri: string, uid: string) => {
  try {
    const formData = new FormData();
    const fileName = uri.split("/").pop() || `${uid}.jpg`;
    const fileType = fileName.split(".").pop() || "jpg";

    formData.append("file", {
      uri,
      name: fileName,
      type: `image/${fileType}`,
    } as any);

    formData.append("upload_preset", "pet_upload");

    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dsc9mxsby/image/upload`;

    const response = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!data.secure_url) {
      throw new Error("Cloudinary upload failed");
    }

    return data.secure_url;
  } catch (error) {
    console.error("Pet image upload failed:", error);
    throw new Error("Failed to upload pet image");
  }
};
