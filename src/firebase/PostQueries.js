import { setDoc, doc, serverTimestamp, collection, getDocs, orderBy, limit, query, startAfter } from "firebase/firestore";
import { firestore } from "./Connection";

export async function createPostInFirestore(
        authorID,
        author,
        text,
        imageURL,
        votes,
        score
    ) {

    try {
        
        const docRef = doc(collection(firestore, "posts"));
        const docData = {
            authorID: authorID,
            author: author,
            text: text,
            createdAt: serverTimestamp(),
            imageURL: imageURL,
            votes: votes,
            score: score,
        };

        await setDoc(docRef, docData)

    } catch(error) {

        console.log(error);

    }
}

export async function getPostsData(initialDownload, max, last, setLast, posts, setPosts) {

    try {
        let q = null;
  
        if(initialDownload)
            q = query(  collection(firestore, "posts"),
                            orderBy('createdAt'),
                            limit(max))
        else
            q = query(  collection(firestore, "posts"),
                            orderBy('createdAt'),
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