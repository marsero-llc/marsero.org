import {FunctionComponent} from "react";
import styles from '../ThanksScreen.module.sass'

const ThanksTitle:FunctionComponent = () => {
    return <div className={styles.title}>
        <span className={styles.titleBig}>СПАСИБО ЗА&nbsp;ЗАЯВКУ</span> <br/>
        <span className={styles.titleLittle}>Мы свяжемся с&nbsp;вами в&nbsp;ближайшее время</span>
    </div>
}
export default ThanksTitle;