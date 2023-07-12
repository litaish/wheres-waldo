import { useContext } from 'react';
import styles from './Canvas.module.css';
import CharacterSelector from './CharacterSelector';
import { GameContext } from '../../context/GameContext';

const Canvas = ({ img }) => {
  const { clickCoordinates, handleCanvasClick } = useContext(GameContext);

  return (
    <div className={styles.container}>
      <img onClick={handleCanvasClick} className={styles.img} src={img} alt="" />
      <CharacterSelector pos={clickCoordinates}/>
    </div>
  )
};

export default Canvas;
