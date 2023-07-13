import CharactersBar from './CharactersBar';
import Canvas from './Canvas';
import Stopwatch from './Stopwatch';
import ScoreSubmitForm from './ScoreSubmitForm';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { useContext, useEffect } from 'react';
import { GameContext } from '../../context/GameContext';
import { useParams } from 'react-router-dom';

const GameView = () => {
  const { level, fetchLevel } = useContext(GameContext);
  const { id } = useParams();

  useEffect(() => {
    fetchLevel(id);
  }, [])

  if (!level)  {
    return <LoadingSpinner />
  }

  return (
    <main>
      <ScoreSubmitForm />
      <CharactersBar characters={level.characters}/>
      <Stopwatch />
      <Canvas img={level.img}/>
    </main>
  );
}

export default GameView;