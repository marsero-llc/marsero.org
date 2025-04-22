import {FunctionComponent, useEffect, useState} from "react";
import Header from "../header/Header";
import styles from './Branding.module.sass'
import {officialText, setNowPageType} from '../../../public/staticInfo'
import DiscussButton from "../header/discussButton/DiscussButton";

interface IProps {
    setNowPage: setNowPageType
    setPosition:  (value: (((prevState: number) => number) | number)) => void

}
const BrandingScreen: FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    const [imgSrc, setImgSrc] = useState<string>("/assets/big-photos/BrandingBack-small.png")
    useEffect( () => {
        const img = new Image()
        img.src = "/assets/big-photos/BrandingBack.png"
        img.onload = () => setImgSrc("/assets/big-photos/BrandingBack.png")
    })
    return <div style={{  backgroundImage: 'url("' + imgSrc + '")'}}  className={styles.screenBody}>
        <div>
            <Header setPosition={setPosition} setNowPage={setNowPage} page={'branding'}/>
        </div>
        <div className={styles.screenContent}>
            <div className={styles.screenTitle}>
                <span className={styles.webDesignTitle}>БРЕНДИНГ</span>
                <span className={styles.webDesignText}>Разрабатываем сайты,которые помогут вам продавать больше</span>
                <DiscussButton setPosition={setPosition} setNowPage={setNowPage}/>
            </div>
            <div className={styles.bottomText}>
                <span>{officialText}</span>
            </div>
        </div>
    </div>
}
export default BrandingScreen