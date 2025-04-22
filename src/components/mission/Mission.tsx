import {FunctionComponent} from "react";
import styles from './Mission.module.sass'

const Mission: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    return <div className={styles.missionBody}>
        <div className={styles.littleTitle}>
            <span>{ isMobile ? 'МИССИЯ' : '/Миссия'}</span>
        </div>
        <div className={styles.text}>
            {
                isMobile ?
                    <span>
                        Обеспечить наших клиентов лучшими<br/>решениями в сфере информационных
                        технологий, путем создания уникальных,<br/>ярких и продуманных до мелочей<br/>продающих продуктов.
                    </span>
                    :
                    <span>
                        Обеспечить наших клиентов <span className={styles.green}>лучшими решениями<br/></span>в сфере информационных
                        технологий, путем создания<br/>уникальных, ярких и продуманных до мелочей<br/>продающих продуктов.
                    </span>
            }
        </div>
    </div>
}
export default Mission