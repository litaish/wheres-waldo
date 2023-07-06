import styles from './CharacterIcon.module.css';

const CharacterIcon = ({ img, size }) => {
  return (
    <div className={styles.container}>
      <img style={{height: size, width: size }} src="https://fakeimg.pl/70/" alt="" />
    </div>
  )
};

export default CharacterIcon
