import styles from './LevelsGrid.module.css';

const LevelsGrid = ({ children }) => {
    return (
      <div className={styles.grid}>
        {children}
      </div>
    );
  }
  
export default LevelsGrid;