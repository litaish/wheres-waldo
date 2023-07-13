import styles from './CharactersBar.module.css';
import CharacterIcon from './CharacterIcon';

const CharactersBar = ({ characters }) => {
  return (
    <div className={styles.container}>
      {characters.map(character => {
        return <CharacterIcon key={character.name} size={70} img={character.img} hasBackground={false}/>
      })}
    </div>
  )
};

export default CharactersBar;

