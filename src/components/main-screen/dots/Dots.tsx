import {FunctionComponent} from "react";
import styles from '../MainScreen.module.sass'

const Dots:FunctionComponent = () => {
    return <ul className={styles.dotsList}>
            <li>Веб-дизайн</li>
            <li>Разработка ПО</li>
            <li>Визуальные решения</li>
            <li>Разработка игр</li>
        </ul>
}

export default Dots;