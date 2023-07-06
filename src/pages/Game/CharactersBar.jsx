import styles from './CharactersBar.module.css';
import CharacterIcon from './CharacterIcon';

const CharactersBar = () => {
  return (
    <div className={styles.container}>
      <CharacterIcon />
      <CharacterIcon />
      <CharacterIcon />
      <CharacterIcon />
    </div>
  )
};

export default CharactersBar;

