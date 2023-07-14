import styles from '../styles.module.css';
import { ServiceCard } from './ServiceCard';

export const Services = ({ serviceCardData }) => {
  return (
    <div className={styles.services} id='services'>
      <h1>Our Services</h1>
      <div className={styles.serviceCardContainer}>
        {serviceCardData.map((cardData, id) => (
          <ServiceCard key={id} cardData={cardData}></ServiceCard>
        ))}
      </div>
    </div>
  );
};
