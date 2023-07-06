import styles from './LeaderboardView.module.css';
import Level from "./Level";
import Score from "./Score";

const LeaderboardView = () => {
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