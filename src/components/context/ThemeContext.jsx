"use client"

import { createContext, useState } from "react"
export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

    const [mode, setMode] = useState("dark");
    const modeToggle = () => setMode(prev => prev === "darc" ? "light" : "darc");

    return (
        <ThemeContext.Provider value={{ modeToggle, mode }}>
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    )
}