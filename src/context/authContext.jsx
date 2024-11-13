import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        try {
            const res = await axios.post("http://localhost:8800/server/auth/login", inputs, {
                withCredentials: true,
            });

            console.log("Login Response:", res.data); // Log response data for verification

            // Check if data exists in response before updating state
            if (res.data) {
                setCurrentUser(res.data);
            } else {
                console.error("No data returned from the login response");
            }
        } catch (err) {
            // Log the error response if available
            if (err.response) {
                console.error("Login error response:", err.response.status, err.response.data);
            } else {
                console.error("Login error:", err.message);
            }
        }
    };


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};
