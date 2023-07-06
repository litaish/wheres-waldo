import styles from './GameView.module.css';
import CharactersBar from './CharactersBar';
import Image from './Image';
import Timer from './Timer';

const GameView = () => {
    return (
      <main>
        <CharactersBar />
        <Timer />
        <div className={styles.image__container}>
          <Image />
        </div>
      </main>
    );
  }
  
  export default GameView;