import styles from './GameView.module.css';
import CharactersBar from './CharactersBar';
import Canvas from './Canvas';
import Timer from './Timer';
import ScoreSubmitForm from './ScoreSubmitForm';

const GameView = () => {
    return (
      <main>
        <ScoreSubmitForm />
        <CharactersBar />
        <Timer />
        <div className={styles.image__container}>
          <Canvas />
        </div>
      </main>
    );
  }
  
  export default GameView;