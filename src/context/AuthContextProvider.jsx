import { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthContextProvider({children}) {
    const [isLogin, setIsLogin] = useState(false);

    function login(username, password) {
        if(username==='admin', password==='admin') {
            setIsLogin(true);
            return true;
        }
    }

    function logout() {
        setIsLogin(false);
    }

    return (
        <AuthContext.Provider value={{isLogin, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;