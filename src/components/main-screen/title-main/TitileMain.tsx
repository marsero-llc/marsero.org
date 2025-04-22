import {FunctionComponent} from "react";
import styles from '../MainScreen.module.sass'

const TitleMain:FunctionComponent = () => {
    return <div className={styles.title}>
        <span className={styles.titleGreen}>ЯРКИЕ</span> <br/>
        <span className={styles.titleWhite}>РЕШЕНИЯ ДЛЯ</span><br/>
        <span className={styles.titleWhite}>УЛУЧШЕНИЙ</span>
    </div>
}
export default TitleMain;