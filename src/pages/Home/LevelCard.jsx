import styles from './LevelCard.module.css';
import { Link } from 'react-router-dom';

const LevelCard = () => {
    return (
      <div className={styles.card}>
        <Link to='/game'>
          <div className={styles.card__img__container}>
            <img className={styles.card__img} src="https://fakeimg.pl/400x250/ff0000/000" alt="" />
          </div>
        </Link>
        <div className={styles.card__content}>
          <p className={styles.card__level}>Beach</p>
          <div className={styles.card__characters}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
  
export default LevelCard;