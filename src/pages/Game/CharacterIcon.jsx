import styles from './CharacterIcon.module.css';

const CharacterIcon = ({ img, size, hasBackground, isFound }) => {
  return (
    <div className={styles.container}>
      <img style={{height: size, width: size, backgroundColor: hasBackground ? 'white' : 'transparent',  opacity: isFound ? 0.3 : 1 }} src={img} alt="" />
    </div>
  )
};

export default CharacterIcon
