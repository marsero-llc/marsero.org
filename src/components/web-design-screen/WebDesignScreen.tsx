import {FunctionComponent, useEffect, useState} from "react";
import Header from "../header/Header";
import styles from './WebDesignScreen.module.sass'
import DiscussButton from "../header/discussButton/DiscussButton";
import {setNowPageType} from "../../../public/staticInfo";
interface IProps {
    setNowPage: setNowPageType
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const WebDesignScreen: FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    const [imgSrc, setImgSrc] = useState<string>("/assets/big-photos/designScreenBack-small.png")
    useEffect( () => {
        const img = new Image()
        img.src = "/assets/big-photos/designScreenBack.png"
        img.onload = () => setImgSrc("/assets/big-photos/designScreenBack.png")
    })
    return <div style={{  backgroundImage: 'url("' + imgSrc + '")'}} className={styles.screenBody}>
        <div>
            <Header setPosition={setPosition} setNowPage={setNowPage} page={'design'}/>
        </div>
        <div className={styles.screenContent}>
            <div className={styles.screenTitle}>
                <span className={styles.webDesignTitle}>ВЕБ-ДИЗАЙН</span>
                <span className={styles.webDesignText}>Разрабатываем сайты,которые помогут вам продавать больше</span>
                <DiscussButton setPosition={setPosition} setNowPage={setNowPage}/>
            </div>
            <div className={styles.dots}>
                <span>Figma</span>
                <span>Tilda</span>
                <span>Adobe XD</span>
                <span>Webflow</span>
            </div>
        </div>
    </div>
}
export default WebDesignScreen