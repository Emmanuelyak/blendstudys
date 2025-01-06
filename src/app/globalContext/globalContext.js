"use client"
import{ createContext, useState } from "react";

 export const GlobalContext = createContext();

export default function GlobalProvider ({children}) {
const [activeIndex, setActiveIndex] = useState(0);
    return (
        <GlobalContext.Provider value={{activeIndex, setActiveIndex}}>
            {children}
        </GlobalContext.Provider>
    )
}