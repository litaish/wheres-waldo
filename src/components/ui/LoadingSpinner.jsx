import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <p>Loading ...</p>
    </div>
  )
};

export default LoadingSpinner

