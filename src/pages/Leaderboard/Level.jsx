import styles from './Level.module.css';

const Level = ({ children }) => {
  return (
    <div className={styles.container}>
      <header>Beach</header>
      {children}
    </div>
  )
};

export default Level
