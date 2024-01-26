import { setDoc, doc, serverTimestamp, updateDoc, collection, getDocs, orderBy, limit, query, startAfter } from "firebase/firestore";
import { firestore, storage } from "../Connection";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { getNameById, getPhotoUrlById, getUserNumberOfPosts } from "./UserQueries";

export async function createPostInFirestore(
        uid,
        text,
        imageURL
    ) {
    {/* Getting necessary information */}
    const postNumber = await getUserNumberOfPosts(uid) + 1;
    const userName = await getNameById(uid)
    const userImage = await getPhotoUrlById(uid);
    let photoUrl = "none"

    {/* Sending image */}

    if(imageURL) {
        try {
            
            const response = await fetch(imageURL);
            const blob = await response.blob();
    
            const storageRef = ref(storage, "postPictures/" + uid +'_'+ postNumber);
            const uploadTask = uploadBytesResumable(storageRef, blob);
    
            await uploadTask
            photoUrl = await getDownloadURL(uploadTask.snapshot.ref);

        } catch (error) {
            console.log(error)
        }
    }

    try {

         {/* Performing query */}
        const docRef1 = doc(firestore, "posts", uid +'_'+ postNumber);
        const docData1 = {
            authorID: uid,
            author: userName,
            text: text,
            createdAt: serverTimestamp(),
            imageURL: photoUrl,
            authorImageURL: userImage,
            visible: false
        };

        await setDoc(docRef1, docData1)
        
        {/* Incrementing number of userPosts */}
        const docRef2 = doc(firestore, "users", uid);

        const docData2 = {
            numberOfPosts: postNumber
        };

        await updateDoc(docRef2, docData2)



    } catch(error) {

        console.log(error);

    }
    
}

export async function getPostsData(initialDownload, max, last, setLast, posts, setPosts) {

    try {
        let q = null;
  
        if(initialDownload)
            q = query(  collection(firestore, "posts"),
                            orderBy('createdAt', "desc"),
                            limit(max))
        else
            q = query(  collection(firestore, "posts"),
                            orderBy('createdAt', "desc"),
                            startAfter(last),
                            limit(max))
        
        let docSnap = await getDocs(q);

        let docData = docSnap.docs.map((doc) => ({
            _id: doc.id,
            ...doc.data(),
        }));
                
        setLast(docSnap.docs[docSnap.docs.length-1]);

        if(initialDownload)
           setPosts(docData);
        else 
            setPosts(posts => [...posts, ...docData]);
        
           
    } catch(error) {
        console.log(error);
    }
    
}