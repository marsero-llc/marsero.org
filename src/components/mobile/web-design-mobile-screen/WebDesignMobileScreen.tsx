import {FunctionComponent} from "react";
import styles from './WebDesignMobileScreen.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
import {setNowPageType} from "../../../../public/staticInfo";

interface IProps {
    setNowPage: setNowPageType
    setPosition: (value: (((prevState: number) => number) | number)) => void
}

const WebDesignMobileScreen: FunctionComponent<IProps>
    = ({setNowPage, setPosition}) => {
    return <div className={styles.workingScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setNowPage={setNowPage}/>
        </div>
        <div className={styles.titleBox}>
            <span className={styles.titleWhite}>ВЕБ-ДИЗАЙН</span>
            <span className={styles.littleText}>Разрабатываем сайты,которые помогут<br/>вам продавать больше</span>
        </div>
        <div className={styles.dots}>
            <span>Figma</span>
            <span>Tilda</span>
            <span>Adobe XD</span>
            <span>Webflow</span>
        </div>
        <div className={styles.discussBtnBox}>
            <DiscussMobileButton setPosition={setPosition} setNowPage={setNowPage}/>
        </div>
    </div>
}
export default WebDesignMobileScreen