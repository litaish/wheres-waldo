import CharactersBar from './CharactersBar';
import Canvas from './Canvas';
import Stopwatch from './Stopwatch';
import ScoreSubmitForm from './ScoreSubmitForm';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../context/GameContext';
import { useParams } from 'react-router-dom';

const GameView = () => {
  const { level, fetchLevel, stop } = useContext(GameContext);
  const { id } = useParams();
  const [isFormVisible, setisFormVisible] = useState(false);

  const processGameCompletion = () => {
      const allFound = level.characters.every(character => character.found === true);

      if (allFound) {
        // Make form visible
        setisFormVisible(true);
        // Stop timer
        stop();
      }
  }

  useEffect(() => {
    fetchLevel(id);
  }, [])

  useEffect(() => {
    if (level) {
      processGameCompletion();
    }
  }, [level])


  if (!level)  {
    return <LoadingSpinner />
  }

  return (
    <main>
      <ScoreSubmitForm isHidden={isFormVisible}/>
      <CharactersBar characters={level.characters}/>
      <Stopwatch />
      <Canvas img={level.img}/>
    </main>
  );
}

export default GameView;