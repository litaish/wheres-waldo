import { useContext } from 'react';
import styles from './Canvas.module.css';
import CharacterSelector from './CharacterSelector';
import { GameContext } from '../../context/GameContext';

const Canvas = () => {
  const { clickCoordinates, handleCanvasClick } = useContext(GameContext);

  return (
    <div className={styles.container}>
      <img onClick={handleCanvasClick} className={styles.img} src="https://fakeimg.pl/2560x1500/" alt="" />
      <CharacterSelector pos={clickCoordinates}/>
    </div>
  )
};

export default Canvas;
