import {FunctionComponent} from "react";
import styles from './WorkingMobilePage.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
import {setNowPageType} from "../../../../public/staticInfo";

interface IProps {
    setNowPage: setNowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const WorkingMobilePage: FunctionComponent<IProps>
    = ({setNowPage, setPosition}) => {
    return <div className={styles.workingScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setNowPage={setNowPage}/>
        </div>
        <div className={styles.titleBox}>
            <span className={styles.titleWhite}>РАЗРАБОТКА</span>
            <span className={styles.titleGreen}>ПО</span>
            <span className={styles.littleText}>Создаем уникальные программные<br/>решения для бизнеса</span>
        </div>
        <div className={styles.dots}>
            <span>Python</span>
            <span>PHP</span>
            <span>Java</span>
            <span>HTML</span>
        </div>
        <div className={styles.discussBtnBox}>
            <DiscussMobileButton setPosition={setPosition} setNowPage={setNowPage}/>
        </div>
    </div>
}
export default WorkingMobilePage