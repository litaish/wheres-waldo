import styles from './ScoreSubmitForm.module.css';

const ScoreSubmitForm = () => {
  return (
    <div className={styles.overlay}>
      <form className={styles.form}>
        <div className={styles.text__container}>
            <p>Congratulations! You found them all! &#127942;</p>
            <p>To show up on our leaderboards, type in your name.</p>
        </div>
        <div className={styles.form__row}>
            <label htmlFor="name">Your Name</label>
            <input id='name' type="text" />
        </div>
        <div className={styles.button__container}>
            <button className={`${styles.button} ${styles.button__dismiss}`} type="button">Dismiss</button>
            <button className={`${styles.button} ${styles.button__submit}`} type="button">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default ScoreSubmitForm;
