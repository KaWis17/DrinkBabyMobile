import { setDoc, getDoc, serverTimestamp, doc } from "firebase/firestore";
import { firestore } from "../Connection";

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
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) 
        return setData(docSnap.data());
    else 
        alert("could not load the data!")
    
}
