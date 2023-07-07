import styles from './CharacterIcon.module.css';

const CharacterIcon = ({ img }) => {
    return (
      <div className={styles.container}>
        <img src={img}></img>
      </div>
    );
  }
  
  export default CharacterIcon;