import styles from "../styles.module.css"

export const ServiceCard = ({cardData}) => {
    return (
        <div className={styles.serviceCard}>
            <img src={cardData.imgUrl} alt="" />
            <h4>{ cardData.h4 }</h4>
            <p>{ cardData.p }</p>
        </div>
    )
}