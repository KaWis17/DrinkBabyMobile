import { createContext, useContext, useState } from "react";


const authContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('Krzysztof');
    return(
        <authContext.Provider value={{user}}>
            {children}
        </authContext.Provider>
    )
}

export default function useAuth() {
    return useContext(authContext);
}