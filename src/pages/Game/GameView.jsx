import CharactersBar from './CharactersBar';
import Canvas from './Canvas';
import Stopwatch from './Stopwatch';
import ScoreSubmitForm from './ScoreSubmitForm';

const GameView = () => {
    return (
      <main>
        <ScoreSubmitForm />
        <CharactersBar />
        <Stopwatch />
        <Canvas />
      </main>
    );
  }
  
  export default GameView;