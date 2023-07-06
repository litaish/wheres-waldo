import styles from './CharacterSelector.module.css';
import CharacterIcon from './CharacterIcon';

const CharacterSelector = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bounding__box}>
            
      </div>
      <ul className={styles.characters}>
        <li>
          <CharacterIcon size={30}/>
          Waldo
        </li>
        <li>
          <CharacterIcon size={30}/>
          Wilma
        </li>
        <li>
          <CharacterIcon size={30}/>
          Whitebeard Wizard
        </li>
        <li>
          <CharacterIcon size={30}/>
          Odlaw
        </li>
      </ul>
    </div>
  )
};

export default CharacterSelector
