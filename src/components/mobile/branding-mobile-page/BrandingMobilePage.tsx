import {FunctionComponent} from "react";
import styles from './BrandingMobilePage.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
import {setNowPageType} from "../../../../public/staticInfo";

interface IProps {
    setNowPage: setNowPageType,
    setPosition:  (value: (((prevState: number) => number) | number)) => void

}
const BrandingMobileScreen: FunctionComponent<IProps>
    = ({setNowPage, setPosition}) => {
    return <div className={styles.brandingScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setNowPage={setNowPage}/>
        </div>
        <div className={styles.titleBox}>
            <span className={styles.titleWhite}>БРЕНДИНГ</span>
            <span className={styles.littleText}>Разработаем дизайн и стратегию<br/>продвижения ваших товаров и услуг</span>
        </div>
        <div className={styles.discussBtnBox}>
            <DiscussMobileButton setPosition={setPosition} setNowPage={setNowPage}/>
        </div>
    </div>
}
export default BrandingMobileScreen