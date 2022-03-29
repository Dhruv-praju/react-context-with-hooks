import React,{ useState,createContext } from "react";

const ThemeContext = createContext()

function ThemeProvider(props) {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const toggleTheme = ()=> setIsDarkMode(m => !m)

    return (
            <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
    )
}
export {ThemeProvider, ThemeContext}