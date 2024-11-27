import { Children, createContext, useState } from "react";

export const HttpContext = createContext();

export const HttpProvider = ({ children }) => {
    
    const linkToWeb = 'http://localhost:8080'

    return <HttpContext.Provider value={{ linkToWeb }}>
        { children }
        </HttpContext.Provider>
}