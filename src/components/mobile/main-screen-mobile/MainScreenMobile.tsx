import {FunctionComponent, useEffect, useState} from "react";
import styles from './MainScreenMobile.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
import {setNowPageType} from "../../../../public/staticInfo";


interface IProps {
    setNowPage: setNowPageType
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const MainScreenMobile: FunctionComponent<IProps>
    = ({setNowPage, setPosition}) => {
    const [imgSrc, setImgSrc] = useState<string>("/assets/big-photos/MobileMainScreen-small.png")
    useEffect( () => {
        const img = new Image()
        img.src = "/assets/big-photos/MobileMainScreen.png"
        img.onload = () => setImgSrc("/assets/big-photos/MobileMainScreen.png")
    })
    return <div style={{  backgroundImage: 'url("' + imgSrc + '")'}} className={styles.mainScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setNowPage={setNowPage}/>
        </div>
        <div className={styles.titleBox}>
            <span className={styles.titleGreen}>ЯРКИЕ</span>
            <span className={styles.titleWhite}>РЕШЕНИЯ ДЛЯ</span>
            <span className={styles.titleWhite}>УЛУЧШЕНИЙ</span>
        </div>
        <div className={styles.linesBox}>
            <div className={styles.linesBoxContent}>
                <span>Разработка игр</span>
                <span>Визуальные решения</span>
                <span>Web-design</span>
                <span>Разработка ПО</span>

            </div>
            <div className={styles.horizLine}/>
            <div className={styles.vertLine}/>
            <div className={styles.dot}/>
        </div>
        <div className={styles.discussBtnBox}>
            <DiscussMobileButton setPosition={setPosition} setNowPage={setNowPage}/>
        </div>
    </div>
}
export default MainScreenMobile