import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
      <div className={styles.Layout}>
        {children}
      </div>
    );
  }
  
export default Layout;