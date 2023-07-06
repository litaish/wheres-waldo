import styles from './Canvas.module.css';
import CharacterSelector from './CharacterSelector';

const Canvas = () => {

  return (
    <div>
      <img className={styles.img} src="https://fakeimg.pl/2560x1500/" alt="" />
      <CharacterSelector />
    </div>
  )
};

export default Canvas;
