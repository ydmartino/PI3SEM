import { Children, createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState(localStorage.getItem('preferredTheme'))

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
        localStorage.setItem('preferredTheme', (theme == 'light' ? 'dark' : 'light'))
        console.log(localStorage)
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        { children }
        </ThemeContext.Provider>
}