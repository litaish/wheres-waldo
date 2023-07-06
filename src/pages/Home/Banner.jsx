import styles from './Banner.module.css';
import largeLogo from '../../assets/images/logo/logo_large.png';

const Banner = () => {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
            <h1>Where did everyone go?</h1>
            <p>
            Join the search and uncover every hidden character! Your objective is simple: locate 
            and click on all the characters scattered throughout the picture. Levels may vary
            in difficulty.
            </p>
        </div>
        <img className={styles.right} src={largeLogo} alt="Wheres Waldo?" />
      </div>
    );
  }
  
  export default Banner;