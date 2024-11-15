import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setCurrentUser(parsedUser);
            } catch (err) {
                console.error("Error parsing user data from localStorage:", err);
                // Optionally, you can clear localStorage or handle the error as needed.
                localStorage.removeItem("user");
            }
        }
    }, []);

    const login = (userData) => {
        // Simulate a successful login and save user data to localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        setCurrentUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("user");
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
