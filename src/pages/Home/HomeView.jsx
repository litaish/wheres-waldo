import styles from './HomeView.module.css';
import Banner from './Banner';
import LevelsGrid from './LevelsGrid';
import LevelCard from './LevelCard';
import { useContext, useEffect } from 'react';
import { LevelsContext } from '../../context/LevelsContext';

const HomeView = () => {
    const { levels, fetchLevels } = useContext(LevelsContext);

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