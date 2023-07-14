import styles from './Level.module.css';

const Level = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <header>{title}</header>
      {children}
    </div>
  )
};

export default Level
