import { createContext } from "react";
import React, { useEffect, useContext, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () =>{
        // TO DO
        setCurrentUser({
            id:1,
            name:"Jero Ginaca", 
            profilePic: "https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80" 
        })
    };

    useEffect (() =>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])

    return(
        <AuthContext.Provider value={{ currentUser, login }}>
            { children }
        </AuthContext.Provider>
    )
}
