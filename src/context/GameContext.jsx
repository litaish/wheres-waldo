import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [clickCoordinates, setClickCoordinates] = useState({ x: 111, y: 222 });

    const handleClick = (e) => setClickCoordinates( { x: e.clientX, y: e.clientY });

    return (
       <GameContext.Provider value={ { clickCoordinates, handleClick } }>
        {children}
       </GameContext.Provider>
    )
}