import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    currentMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
})

export const ThemeProvider = ThemeContext.Provider


export default function useTheme() {
    return useContext(ThemeContext)
}


