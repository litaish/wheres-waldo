import { createContext, useState } from "react";
import { useStopwatch } from "../hooks/useStopwatch";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [clickCoordinates, setClickCoordinates] = useState({ x: 111, y: 222 });

    const { time, stop } = useStopwatch();

    const handleCanvasClick = (e) => setClickCoordinates( { x: e.clientX, y: e.clientY });

    return (
       <GameContext.Provider value={ { clickCoordinates, handleCanvasClick, time, stop } }>
        {children}
       </GameContext.Provider>
    )
}