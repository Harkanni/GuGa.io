import styles from '../styles.module.css';
import { DropdownMenuData } from '../DropdownMenuData';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const DropDownMenu = ({ showSidebar, setshowSidebar }) => {
  const handleClick = (event) => {
    console.log('close sidebar');
    setshowSidebar(!showSidebar);
  };
  return (
    <div
      className={`${
        showSidebar ? styles.dropDownMenuActive : styles.dropDownMenuFalse
      }`}
    >
      <div
        className={styles.closeMenuButton}
        onClick={(event) => handleClick(event)}
      >
        <FontAwesomeIcon
          icon={faXmark}
          size='lg'
          style={{ color: '#ffffff' }}
        />
      </div>
      {DropdownMenuData.map((menuItem, id) => (
        <p key={id} className={styles.menuItem}>
          {' '}
          {menuItem}{' '}
        </p>
      ))}

      <Link to={'/login'} className={styles.dropDownMenuSignInButton}>
        Sign In
        {/* <Button text='Sign In' specialStyle='dropDownMenuSignInButton'></Button> */}
      </Link>
    </div>
  );
};
