import {FunctionComponent} from "react";
import { techSrcList } from '../../../public/staticInfo'
import styles from './Technologies.module.sass'

const Technologies: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    return <div className={styles.techBody}>
        <span className={styles.techTitle}>ТЕХНОЛОГИИ<br/>И ПЛАТФОРМЫ</span>
        <div className={styles.techContent}>
            { techSrcList.map( (src, index) =>
                isMobile && index == 14 ? ''
                    :
                <div key={index}>
                    <img src={src} key={index}/>
                </div>)
            }
        </div>
    </div>
}
export default Technologies