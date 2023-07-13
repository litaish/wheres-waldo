import styles from './CharacterIcon.module.css';

const CharacterIcon = ({ img, size, hasBackground }) => {
  return (
    <div className={styles.container}>
      <img style={{height: size, width: size, backgroundColor: hasBackground ? 'white' : 'transparent' }} src={img} alt="" />
    </div>
  )
};

export default CharacterIcon
