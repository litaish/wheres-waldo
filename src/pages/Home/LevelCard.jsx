import styles from './LevelCard.module.css';
import { Link } from 'react-router-dom';
import CharacterIcon from './CharacterIcon';

const LevelCard = ({ id, thumbnail, title, characters }) => {
    return (
      <div className={styles.card}>
        <Link to={`/game/${id}`}>
          <div className={styles.card__img__container}>
            <img className={styles.card__img} src={thumbnail} alt="" />
          </div>
        </Link>
        <div className={styles.card__content}>
          <p className={styles.card__level}>{title}</p>
          <div className={styles.card__characters}>
            {characters.map(character => <CharacterIcon key={character.name} img={character.img}/>)}
          </div>
        </div>
      </div>
    );
  }
  
export default LevelCard;