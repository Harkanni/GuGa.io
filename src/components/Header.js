import styles from '../styles.module.css';
import video from '../React.mp4';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ showSidebar, setshowSidebar, navBgColor, setnavBgColor }) => {
  const handleClick = (event) => {
    console.log('Clicked to show sidebar');
    setshowSidebar(!showSidebar);
  };

  return (
    <header>
      <video
        className={styles.bgVideo}
        autoPlay
        loop
        src={video}
        controls={false}
      ></video>
      <div className={styles.appHeader}>
        <nav className={`${styles.nav} ${navBgColor ? styles.bgDark : styles.bgNone}`}>
          <div className={styles.logo}>guga</div>
          <div className={styles.navContentContainer}>
            <ul className={styles.navContent}>
              <li>About</li>
              <li>Discover</li>
              <li>Services</li>
              <li>Sign Up</li>
            </ul>
          </div>
          <div
            className={styles.hambugerMenu}
            onClick={(event) => handleClick(event)}
          >
            <FontAwesomeIcon icon={faBars} style={{ color: '#ffffff' }} />
          </div>
          <Button text={"Sign In"}></Button>
        </nav>
        <div className={styles.headerContent}>
          <h1>Experience the guga</h1>
          <p>
            Sign up for a new account today and receive free access to the
            world's first interactive guga.
          </p>
          <Button text='Get started' specialStyle=''></Button>
        </div>
      </div>
    </header>
  );
};

export default Header;