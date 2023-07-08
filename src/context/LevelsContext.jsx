import { createContext, useState } from "react";

export const LevelsContext = createContext();

export const LevelsProvider = ({ children }) => {
    const [levels, setLevels] = useState([])

    return (
       <LevelsContext.Provider value={ { levels, setLevels } }>
            {children}
       </LevelsContext.Provider>
    )
}