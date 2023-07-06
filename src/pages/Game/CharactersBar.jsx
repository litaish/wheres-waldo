import styles from './CharactersBar.module.css';
import CharacterIcon from './CharacterIcon';

const CharactersBar = () => {
  return (
    <div className={styles.container}>
      <CharacterIcon size={70} />
      <CharacterIcon size={70} />
      <CharacterIcon size={70} />
      <CharacterIcon size={70} />
    </div>
  )
};

export default CharactersBar;

