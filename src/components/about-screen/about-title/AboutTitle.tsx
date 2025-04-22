import {FunctionComponent} from "react";
import styles from '../AboutScreen.module.sass'

const AboutTitle:FunctionComponent = () => {
    return <div className={styles.title}>
        <span className={styles.titleBig}>О НАС</span> <br/>
        <span className={styles.titleLittle}>Разрабатываем проекты, которые помогут</span>
        <span className={styles.titleLittle}>вам продавать больше</span>
    </div>
}
export default AboutTitle;