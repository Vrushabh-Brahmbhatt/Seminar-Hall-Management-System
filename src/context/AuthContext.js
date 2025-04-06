import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: null,
        role: null,
        isAuthenticated: false,
    });

    const login = (token, role) => {
        setAuth({
            token,
            role,
            isAuthenticated: true,
        });
    };

    const logout = () => {
        setAuth({
            token: null,
            role: null,
            isAuthenticated: false,
        });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
