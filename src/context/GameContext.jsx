import { createContext, useState } from "react";
import { useStopwatch } from "../hooks/useStopwatch";
import isWithinBoundingBox from '../utils/isWithinBoundingBox';
import { collection, doc, getDoc, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../config/firebase-config'

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [clickCoordinates, setClickCoordinates] = useState({ x: 0, y: 0 });
    const [clientCoordinates, setClientCoordinates] = useState({ x: 0, y: 0 });
    const [level, setLevel] = useState();
    const [isSelectorActive, setIsSelectorActive] = useState();
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

    const handleSelectorToggle = () => {
        setIsSelectorActive(prev => !prev);
    }

    const handleSelectionClick = async (charName, clickCoords, levelId) => {
        // Query coordinates document with level id
        const coordsRef = collection(db, 'coordinates');
        const q = query(coordsRef, where('level', '==', levelId), limit(1));

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.log('No character coordinates found for level!')
        } else {
            const docSnap = querySnapshot.docs[0];
            const character = docSnap.data().characters.find(character => character.name.toLowerCase() === charName.toLowerCase());
            const boundingBoxCoords = {
                xmin: character.xmin,
                xmax: character.xmax,
                ymin: character.ymin,
                ymax: character.ymax,
            }
            
            // Check if click coordinates are within bounding box
            if (isWithinBoundingBox(clickCoords, boundingBoxCoords)) {
                console.log('found it!')
            } else {
                console.log(clickCoords, boundingBoxCoords)
                console.log('nope')
            }
        }
    }

    const handleCanvasClick = (e) => {
        const imgRect = e.target.getBoundingClientRect();

        const imgx = imgRect.left;
        const imgy = imgRect.top;
    
        const scaleX = imgRect.width / e.target.naturalWidth;
        const scaleY = imgRect.height / e.target.naturalHeight;
    
        const clickX = (e.clientX - imgx) / scaleX;
        const clickY = (e.clientY - imgy) / scaleY;
    
        setClickCoordinates({ x: clickX, y: clickY });
        handleSelectorToggle();

        // Set client coordinates for character selector
        setClientCoordinates( { x: e.clientX, y: e.clientY } );
    }

    return (
        <GameContext.Provider value={{ clickCoordinates, handleCanvasClick, time, stop, level, fetchLevel, isSelectorActive, handleSelectorToggle, handleSelectionClick, clientCoordinates }}>
            {children}
        </GameContext.Provider>
    )
}