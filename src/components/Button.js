import styles from '../styles.module.css';

export const Button = ({ text, specialStyle }) => {
  return (
    <>
      <button className={`${specialStyle ? styles[specialStyle] : ''} ${styles.btn}`}>
        {text ? text : 'Get started'}
      </button>
    </>
  );
};
