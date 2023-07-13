import { createContext, useState } from "react";
import { useStopwatch } from "../hooks/useStopwatch";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase-config'

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [clickCoordinates, setClickCoordinates] = useState({ x: 111, y: 222 });
    const [level, setLevel] = useState();
    const { time, stop } = useStopwatch();

    const fetchLevel = async (levelId) => {
        const docRef = doc(db, 'levels', levelId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setLevel({ ...docSnap.data(), id: docSnap.id });
        } else {
            console.log('No such level found!')
        }
    }

    const handleCanvasClick = (e) => setClickCoordinates({ x: e.clientX, y: e.clientY });

    return (
        <GameContext.Provider value={{ clickCoordinates, handleCanvasClick, time, stop, level, fetchLevel }}>
            {children}
        </GameContext.Provider>
    )
}