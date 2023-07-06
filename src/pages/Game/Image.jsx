import styles from './Image.module.css';
import CharacterSelector from './CharacterSelector';

const Image = () => {

  return (
    <div>
      <img className={styles.img} src="https://fakeimg.pl/2560x1500/" alt="" />
      <CharacterSelector />
    </div>
  )
};

export default Image
