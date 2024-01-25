import { setDoc, getDoc, serverTimestamp, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { firestore, storage } from "../Connection";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import * as ImagePicker from "expo-image-picker";

export async function createUserInFirestore(uid, fullName, email) {

    try {
        
        const docRef = doc(firestore, "users", uid);
        const docData = {
            fullName: fullName,
            email: email,
            createdAt: serverTimestamp()
        };

        await setDoc(docRef, docData)

    } catch(error) {

        console.log(error);

    }
}

export async function getUserData(uid, setData) {

    const docRef = doc(firestore, "users", uid);

    onSnapshot(docRef, (doc) => {
        console.log("Uploaded data")
        setData(doc.data())
    })
    
}

export async function changeProfilePicture(uid) {

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1
    });

    if(!result.canceled){

        try {
            
            const response = await fetch(result.assets[0].uri);
            const blob = await response.blob();
    
            const storageRef = ref(storage, "profilePictures/" + uid);
            const uploadTask = uploadBytesResumable(storageRef, blob);
    
            await uploadTask
            var photoUrl = await getDownloadURL(uploadTask.snapshot.ref);

            await updatePhotoUrlInFirebase(uid, photoUrl);

        } catch (error) {
            console.log(error)
        }
       
    }

}

async function updatePhotoUrlInFirebase(uid, photoUrl) {
    
    try {

        const docRef = doc(firestore, "users", uid);

        const docData = {
            imageUri: photoUrl
        };

        await updateDoc(docRef, docData)

    } catch (error) {
        console.log(error)
    }
}


