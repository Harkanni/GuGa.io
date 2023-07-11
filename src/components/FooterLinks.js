import styles from '../styles.module.css';

export const FooterLinks = ({ FooterData }) => {
  return (
    <div className={styles.footerLink}>
      {FooterData.map((group, id) => (
        <div key={id} className={styles.footerLinkGroup}>
          {group.map((data, id) => (
            <div key={id}>
              <p className={styles.linkTitle}>{data.title}</p>
              {data.links.map((item, id) => (
                <p key={id}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
