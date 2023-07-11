import styles from '../styles.module.css';
import { ServiceCard } from './ServiceCard';

export const Services = ({ serviceCardData }) => {
  return (
    <div className={styles.services}>
      <h1>Our Services</h1>
      {serviceCardData.map((cardData, id) => (
        <ServiceCard key={id} cardData={cardData}></ServiceCard>
      ))}
    </div>
  );
};