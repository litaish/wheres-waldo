import CharactersBar from './CharactersBar';
import Canvas from './Canvas';
import Stopwatch from './Stopwatch';
import ScoreSubmitForm from './ScoreSubmitForm';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { useContext, useEffect } from 'react';
import { GameContext } from '../../context/GameContext';
import { useParams } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase-config'

const GameView = () => {
  const { game, loadGameData, setGame } = useContext(GameContext);
  const { id } = useParams();

  useEffect(() => {
    let unsubscribeFromSnapshot;

    const fetchGameDataAndSubscribe = async () => {
      const gameId = await loadGameData(id);
      unsubscribeFromSnapshot = onSnapshot(doc(db, 'game', gameId), (doc) => setGame({ ...doc.data(), id: doc.id}));
    }

    fetchGameDataAndSubscribe();

    // Unsubscribe from document on unmount
    return unsubscribeFromSnapshot;
  }, [])

  if (!game)  {
    return <LoadingSpinner />
  }

  return (
    <main>
      <ScoreSubmitForm />
      <CharactersBar />
      <Stopwatch />
      <Canvas img={game.level.img}/>
    </main>
  );
}

export default GameView;