import styles from '../styles.module.css';
import { Button } from './Button';

export const ProductCard = (props) => {
  return (
    <div className={styles.premium}>
      <div className={styles.text}>
        <h2>{props.type}</h2>
        <h3>{props.h1}</h3>
        <p>{props.p}</p>
        <Button text={props.text} specialStyle={props.btnBgColour}></Button>
      </div>

      <div className={styles.imageContainer}>
        <img src={props.imgUrl} alt='' />
      </div>
    </div>
  );
};
