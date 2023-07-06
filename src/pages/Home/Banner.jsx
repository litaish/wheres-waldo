import styles from './Banner.module.css';
import largeLogo from '../../assets/images/logo/logo_large.png';

const Banner = () => {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
            <h1>Find everyone!</h1>
            <p>
                The goal of the game is to find all
                characters scattered around a picture.
                Once you find someone - click on them!
                Pick out a level of your choice, some
                are harder, some are easier.
            </p>
        </div>
        <img className={styles.right} src={largeLogo} alt="Wheres Waldo?" />
      </div>
    );
  }
  
  export default Banner;