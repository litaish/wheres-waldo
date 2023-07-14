import { useNavigate, useParams } from 'react-router-dom';
import styles from './ScoreSubmitForm.module.css';
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../context/GameContext';
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from '../../config/firebase-config';

const ScoreSubmitForm = ({ isHidden }) => {
  const navigate = useNavigate();
  const { time, levelPlayers, fetchLevelPlayers } = useContext(GameContext);
  const { id } = useParams();
  const [playerName, setPlayerName] = useState('');
  const [validation, setValidation] = useState({
    isNameValid: false,
    errorMsg: '',
  });

  const validateField = (input) => {
    if (input.trim() === '') {
      setValidation({ isNameValid: false, errorMsg: 'Name cannot be empty' });
      console.log(levelPlayers)
      return false;
    }
    else if (levelPlayers.includes(input.toLowerCase().trim())) {
      setValidation({ isNameValid: false, errorMsg: 'This name is already taken for this level' })
      return false;
    }
    else if (input.length > 30) {
      setValidation({ isNameValid: false, errorMsg: 'This name is too long' })
      return false;
    }
    else {
      setValidation({ isNameValid: true, errorMsg: '' })
      return true;
    }
  }

  const addScore = async (levelId) => {
    const playerNameTrimmed = playerName.trim();

    const leaderboardCollection = collection(db, 'leaderboard');
    const leaderboardQuery = query(leaderboardCollection, where('level_id', '==', levelId));

    const querySnapshot = await getDocs(leaderboardQuery);

    if (querySnapshot.empty) {
      return;
    }

    const leaderboardEntryDoc = querySnapshot.docs[0].ref;

    await updateDoc(leaderboardEntryDoc, {
      scores: [
        ...querySnapshot.docs[0].data().scores, // Merging old array values
        {
          player: playerNameTrimmed,
          time: {
            hr: time.hr,
            min: time.min,
            sec: time.sec,
          }
        }
      ]
    });
  }


  const handleDismissClick = () => {
    navigate('/leaderboard');
  }

  const handleSubmitClick = () => {
    addScore(id);
    navigate('/leaderboard');
  }

  const handleChange = (e) => {
    setPlayerName(e.target.value);
    validateField(e.target.value);
  }

  useEffect(() => {
    fetchLevelPlayers(id);
  }, [])

  return (
    <div className={styles.overlay} style={{ display: isHidden ? 'flex' : 'none' }}>
      <form className={styles.form}>
        <div className={styles.text__container}>
          <p>Congratulations! You found them all! &#127942;</p>
          <p>To show up on our leaderboards, type in your name.</p>
        </div>
        <div className={styles.form__row}>
          <label htmlFor="name">Your Name</label>
          <span className={styles.error}>{validation.errorMsg}</span>
          <input onChange={handleChange} id='name' type="text" name='name' placeholder='type your name...' />
        </div>
        <div className={styles.button__container}>
          <button onClick={handleDismissClick} className={`${styles.button} ${styles.button__dismiss}`} type="button">Dismiss</button>
          <button onClick={handleSubmitClick} disabled={!validation.isNameValid} className={`${styles.button} ${styles.button__submit}`} type="button">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default ScoreSubmitForm;
