import { useEffect, useState } from 'react';
import styles from './LeaderboardView.module.css';
import Level from "./Level";
import Score from "./Score";
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import sortScoresByTimes from '../../utils/sortScoresByTimesjs';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';

const LeaderboardView = () => {
  const leaderboardCollectionRef = collection(db, 'leaderboard');
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchLeaderboard = async () => {
    const leaderboardData = await getDocs(leaderboardCollectionRef);
    setLeaderboard(leaderboardData.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    })))
  }

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  if (!leaderboard) {
    return <LoadingSpinner />
  }

    return (
      <main className={styles.container}>
        {leaderboard.map(data => {
          return (
            <Level key={data.id} title={data.level_name}>
              { /* Sort original scores array by fastest time */}
              {sortScoresByTimes(data.scores).map(score => {
                return <Score key={crypto.randomUUID()} player={score.player} time={score.time}/>
              })}
            </Level>
          )
        })}
      </main>
    );
  }
  
  export default LeaderboardView;