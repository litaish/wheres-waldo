import { createContext, useState } from "react";
import { useStopwatch } from "../hooks/useStopwatch";
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase-config'

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [clickCoordinates, setClickCoordinates] = useState({ x: 111, y: 222 });
    const [game, setGame] = useState({});
    const { time, stop } = useStopwatch();

    const loadGameData = async (levelId) => {
        // Get level data by id
        const docRef = doc(db, 'levels', levelId);
        const docSnap = await getDoc(docRef);

        const gameObj = {
            is_complete: false,
            level: docSnap.data(),
        }

        if (docSnap.exists()) {
            // return the game id
            return addDoc(collection(db, 'game'), gameObj)
            .then((gameRef) => {
                setGame({ ...gameObj, id: gameRef.id });
                return gameRef.id;
            })
            .catch((error) => {
                console.log('There has been an error adding game data: ', error)
            }); 
        } else {
            console.log('No level found');
        }
    }

    const handleCanvasClick = (e) => setClickCoordinates({ x: e.clientX, y: e.clientY });

    return (
        <GameContext.Provider value={{ clickCoordinates, handleCanvasClick, time, stop, loadGameData, game, setGame }}>
            {children}
        </GameContext.Provider>
    )
}