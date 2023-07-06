import styles from './Score.module.css'

const Score = () => {
  return (
    <div className={styles.container}>
      <span className={styles.place__number}></span>
      <p className={styles.player__name}>SomeUser</p>
      <p className={`${styles.right} ${styles.time}`}>00:30:00</p>
    </div>
  )
};

export default Score
