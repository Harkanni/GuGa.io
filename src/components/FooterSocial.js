import styles from '../styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faYoutube,
  faLinkedinIn,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

export const FooterSocials = () => {
  return (
    <div className={styles.socialContainer}>
      <h1>guga</h1>
      <p>guga &copy; 2023 All rights reserved.</p>
      <div className={styles.socials}>
        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
      </div>
    </div>
  );
};
