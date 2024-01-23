import { createContext, useContext, useState, useEffect} from "react";

import {    signInWithEmailAndPassword,
            createUserWithEmailAndPassword,
            sendEmailVerification,
            signOut,
        } from "firebase/auth";

import { auth } from './Connection'

const authContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(false);
      
    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                setUser(userCredentials.user);
            })
            .catch((error) => {
                switch(error.code) {
                    case "auth/invalid-email":
                        alert("Invalid email address");
                        break;
                    case "auth/invalid-credential":
                        alert("Invalid credentials")
                        break;
                    default:
                        alert("Unknown error: " + error.code);
                }
            })
    }

    const signUpWithEmail = (email, password, repeatPassword) => {
        if(password !== repeatPassword)
            alert("Password not matching")
        else 
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {
                    setUser(userCredentials.user);
                    verifyEmail();
                })
                .catch((error) => {
                    console.log(error)
                })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .catch((error) => {
            alert(error.message);
        })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log("loggedOut")
                setUser(null);
                alert("Successfully logged out");
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return(
        <authContext.Provider 
            value={{
                user,
                signInWithEmail,
                signUpWithEmail,
                logout
            }
        }>
            {children}
        </authContext.Provider>
    )
}

export default function useAuth() {
    return useContext(authContext);
}