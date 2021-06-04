import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

export default function AuthContextProvider({children}) {

    const [loggedInUser, setLoggedInUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // TODO: crear estado para la info del usuario

    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const setToken = token => localStorage.setItem("TOKEN_KEY", token);
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");

    const isAdmin = () => loggedInUser.role === "ADMIN";

    const logIn = (token, user) => {
        setToken(token);
        setLoggedInUser(user);
        setIsAuthenticated(true);
    };

    const logOut = (token, user) => {
        removeToken(token);
        setLoggedInUser({});
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const token = getToken();
        token && logIn(token, user);
    }, []);
    
    const contextValue = {
        logIn,
        logOut,
        isAuthenticated
    }

    return (
        <AuthContext.Provider value={contextValue}> {/*value={{setToken: setToken}}*/}
            {children}
        </AuthContext.Provider>
    )
}

//Custom hook para simplificar el uso de este contexto
const useAuthContext = () => useContext(AuthContext);

export {
    useAuthContext
};
