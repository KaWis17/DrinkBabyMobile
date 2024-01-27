import { setDoc, getDoc, serverTimestamp, doc, updateDoc, onSnapshot, collection, where, orderBy, query } from "firebase/firestore";
import { firestore, storage } from "../Connection";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import * as ImagePicker from "expo-image-picker";

export async function createUserInFirestore(uid, fullName, email) {

    try {
        
        const docRef = doc(firestore, "users", uid);
        const docData = {
            fullName: fullName,
            email: email,
            createdAt: serverTimestamp(),
            numberOfPosts: 0
        };

        await setDoc(docRef, docData)

    } catch(error) {

        console.log(error);

    }
}

export async function getUserData(uid, setData) {

    const docRef = doc(firestore, "users", uid);

    onSnapshot(docRef, (doc) => {
        console.log("Uploaded user data")
        setData(doc.data())
    })
    
}

export async function addFriendship(uid, friendUid) {

    const userName = await getNameById(uid);
    const friendName = await getNameById(friendUid);

    try {
        
        const docRef = doc(firestore, "friendships", (uid > friendUid ? uid + friendUid : friendUid + uid));
        const docData = {
            lastMessage: {
                text: "Say hi to your new friend",
                time: serverTimestamp(),
                sendBy: uid,
            },
            users: {
                [uid]: userName,
                [friendUid]: friendName,
            },
            usersMatched: [uid, friendUid],
            timestamp: serverTimestamp()
        };

        await setDoc(docRef, docData);

    } catch(error) {

        alert("Adding friend was unsuccessful")
        console.log(error);

    }

}

export async function getUserFriendships(uid, setData) {

    onSnapshot(
        query(  collection(firestore, "friendships"),
                where("usersMatched", "array-contains", uid),
                orderBy("lastMessage.time")), 
        (snap) => {
        console.log("Updated friends data")
        setData(
            snap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
        );
    })

}

export async function changeProfilePicture(uid) {

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.15
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

export async function updatePhotoUrlInFirebase(uid, photoUrl) {
    
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

export async function getNameById(uid) {

    const docRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().fullName;
    } else {
        return '';
    }
}

export async function getPhotoUrlById(uid) {

    const docRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("TU: " + docSnap.data().imageUri)
        return docSnap.data().imageUri;
    }

    return false;
}

export async function getUserNumberOfPosts(uid) {

    const docRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) 
        return docSnap.data().numberOfPosts;
    
    return 0;
}

