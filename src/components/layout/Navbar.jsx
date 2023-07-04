import smallLogo from '../../assets/images/logo/logo_small.png';
import styles from './Navbar.module.css';
import Icon from '@mdi/react';
import { mdiTrophy } from '@mdi/js';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className={styles.nav}>
        <NavLink to='/'>
          <img src={smallLogo} alt="Home" />
        </NavLink>
        <ul>
            <li>
                <NavLink to='/leaderboard'>
                  <Icon path={mdiTrophy} size={1.6} />
                  Leaderboards
                </NavLink>
            </li>
        </ul>
      </nav>
    );
  }
  
export default Navbar;