import {FunctionComponent} from "react";
import styles from './ServiceMobile.module.sass'
const ServicesMobile: FunctionComponent = () => {
    return <div className={styles.serviceBody}>
        <span className={styles.littleTitle}>/Услуги</span>
        <span className={styles.bigTitle}>РАЗРАБОТКА</span>
        <span className={styles.bigTitle}>WEB-DESIGN</span>
        <span className={styles.bigTitle}>БРЕНДИНГ</span>
    </div>
}
export default ServicesMobile