import {FunctionComponent, useEffect, useState} from "react";
import Header from "../header/Header";
import styles from './WorkingPageScreen.module.sass'
import DiscussButton from "../header/discussButton/DiscussButton";
import {setNowPageType} from "../../../public/staticInfo";
interface IProps {
    setNowPage: setNowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const WorkingPageScreen: FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    const [imgSrc, setImgSrc] = useState<string>("/assets/big-photos/workingBack-small.png")
    useEffect( () => {
        const img = new Image()
        img.src = "/assets/big-photos/workingBack.png"
        img.onload = () => setImgSrc("/assets/big-photos/workingBack.png")
    })
    return <div style={{  backgroundImage: 'url("' + imgSrc + '")'}} className={styles.screenBody}>
        <Header setPosition={setPosition} setNowPage={setNowPage} page={'working'}/>
        <div className={styles.screenContent}>
            <div className={styles.screenTitle}>
                <span className={styles.webDesignTitle}>РАЗРАБОТКА<br/>ПРОГРАММНОГО<br/>ОБЕСПЕЧЕНИЯ</span>
                <span className={styles.webDesignText}>Создаем уникальные программные решения для бизнеса</span>
                <DiscussButton setPosition={setPosition} setNowPage={setNowPage}/>
            </div>
            <div className={styles.dots}>
                <span>Python</span>
                <span>PHP</span>
                <span>Java</span>
                <span>HTML</span>
                <span>И др.</span>
            </div>
        </div>
    </div>
}
export default WorkingPageScreen