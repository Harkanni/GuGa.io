import styles from '../styles.module.css';
import video from '../React.mp4';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Header = ({currentSection, activeNav, showSidebar, setshowSidebar, navBgColor, setnavBgColor }) => {
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
        <nav
          className={`${styles.nav} ${
            navBgColor ? styles.bgDark : styles.bgNone
          }`}
        >
          <Link className={styles.logo}>guga</Link>
          <div className={styles.navContentContainer}>
            <ul className={styles.navContent}>
              <li id='navItem'>
                <a style={currentSection === "about"? activeNav : {}} href='#about'>About</a>
              </li>
              <li id='navItem'>
                <a style={currentSection === "discover"? activeNav : {}} href='#discover'>Discover</a>
              </li>
              <li id='navItem'>
                <a style={currentSection === "services"? activeNav : {}} href='#services'>Services</a>
              </li>
              <li id='navItem'>
                <a style={currentSection === "signup"? activeNav : {}} href='#signup'>Sign Up</a>
              </li>
            </ul>
          </div>
          <div
            className={styles.hambugerMenu}
            onClick={(event) => handleClick(event)}
          >
            <FontAwesomeIcon icon={faBars} style={{ color: '#ffffff' }} />
          </div>
          <Link to={"/login"} className={styles.signIn}>
            <Button specialStyle='smallBtn' text={'Sign In'}></Button>
          </Link>
          
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
