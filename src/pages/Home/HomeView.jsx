import styles from './HomeView.module.css';
import Banner from './Banner';
import LevelsGrid from './LevelsGrid';
import LevelCard from './LevelCard';
import { useContext, useEffect } from 'react';
import { LevelsContext } from '../../context/LevelsContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';

const HomeView = () => {
    const { levels, setLevels } = useContext(LevelsContext);

    const fetchLevels = async () => {
      await getDocs(collection(db, "levels"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setLevels(newData);                
      })
    }

    // fetchLevels does not depend on any variables or props, so linter suggestion can be ignored
    useEffect(() => {
      fetchLevels();
    }, []);

    return (
      <main className={styles.container}>
        <Banner />
        <LevelsGrid>
          {levels.map(level => <LevelCard key={level.id} id={level.id} thumbnail={level.thumbnail} title={level.title} characters={level.characters}/>)}
        </LevelsGrid>
      </main>
    );
  }
  
  export default HomeView;