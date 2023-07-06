import styles from './HomeView.module.css';
import Banner from './Banner';
import LevelsGrid from './LevelsGrid';
import LevelCard from './LevelCard';

const HomeView = () => {
    return (
      <main className={styles.container}>
        <Banner />
        <LevelsGrid>
          <LevelCard />
          <LevelCard />
          <LevelCard />
        </LevelsGrid>
      </main>
    );
  }
  
  export default HomeView;