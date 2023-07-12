import styles from './Stopwatch.module.css';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const Stopwatch = () => {
 const { time } = useContext(GameContext);

  return (
    <div className={styles.container}>
      {`${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${time.min} : ${time.sec < 10 ? 0 : ""}${time.sec}`}
    </div>
  )
};

export default Stopwatch;
