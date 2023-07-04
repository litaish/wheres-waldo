import smallLogo from '../../assets/images/logo/logo_small.png';
import styles from './Navbar.module.css';
import Icon from '@mdi/react';
import { mdiTrophy } from '@mdi/js';

const Navbar = () => {
    return (
      <nav className={styles.nav}>
        <img src={smallLogo} alt="Home" />
        <ul>
            <li>
                <Icon path={mdiTrophy} size={1.6} />
                Leaderboards
            </li>
        </ul>
      </nav>
    );
  }
  
export default Navbar;