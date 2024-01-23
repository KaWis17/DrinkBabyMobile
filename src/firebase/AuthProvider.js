import { createContext, useContext, useState } from "react";


const authContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(false);
    return(
        <authContext.Provider value={{user, setUser}}>
            {children}
        </authContext.Provider>
    )
}

export default function useAuth() {
    return useContext(authContext);
}