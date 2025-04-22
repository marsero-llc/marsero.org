import {FunctionComponent} from "react";
import { circlesList, circleListWorkingPage } from '../../../public/staticInfo'
import styles from './Circles.module.sass'
const Circles: FunctionComponent<{page: string}> = ({ page }) => {
    return <div className={styles.circleBody}>
        {page == 'design' ? circlesList.map( (elem, index) =>
            <div key={index} className={styles.circleBox}>
                <img src={'/assets/circles/Circle.svg'} className={styles.circle}/>
                <div><img className={styles.imageBox} src={elem}/></div>
            </div>
        ) :
            circleListWorkingPage.map( (elem, index) =>
                <div key={index} className={styles.circleBox}>
                    <img src={'/assets/circles/Circle.svg'} className={styles.circle}/>
                    <div><img className={styles.imageBox} src={elem}/></div>
                </div>
            )}
    </div>
}

export default Circles;