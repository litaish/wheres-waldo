import { createContext, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase-config'

export const LevelsContext = createContext();

export const LevelsProvider = ({ children }) => {
    const [levels, setLevels] = useState([]);

    const fetchLevels = async () => {
        await getDocs(collection(db, "levels"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setLevels(newData);                
        })
      }

    return (
       <LevelsContext.Provider value={ { levels, fetchLevels } }>
            {children}
       </LevelsContext.Provider>
    )
}