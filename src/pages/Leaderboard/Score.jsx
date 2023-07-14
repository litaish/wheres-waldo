import styles from './Score.module.css'

const Score = ({ player, time }) => {
  const { hr, min, sec} = time;
  return (
    <div className={styles.container}>
      <span className={styles.place__number}></span>
      <p className={styles.player__name}>{player}</p>
      <p className={`${styles.right} ${styles.time}`}>
        {`${hr < 10 ? 0 : ""}${hr} : ${min < 10 ? 0 : ""}${min} : ${sec < 10 ? 0 : ""}${sec}`}
      </p>
    </div>
  )
};

export default Score
