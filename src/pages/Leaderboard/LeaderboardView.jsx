// import { useEffect } from 'react';
import styles from './LeaderboardView.module.css';
import Level from "./Level";
import Score from "./Score";

const LeaderboardView = () => {
  // don't need state, just fetch the levels and display them
  // let levelsWithScores = {};

  // useEffect(() => {
  //   levelsWithScores = { level: 'test' };
  // }, [])

    return (
      <main className={styles.container}>
        <Level>
          <Score />
          <Score />
          <Score />
          <Score />
        </Level>
        <Level>
          <Score />
          <Score />
          <Score />
          <Score />
        </Level>
      </main>
    );
  }
  
  export default LeaderboardView;