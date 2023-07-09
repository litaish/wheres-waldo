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
        <Canvas />
      </main>
    );
  }
  
  export default GameView;