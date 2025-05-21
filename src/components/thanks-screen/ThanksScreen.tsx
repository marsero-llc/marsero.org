import {FunctionComponent, useEffect, useState} from "react";
import Header from "../header/Header";
import styles from "./ThanksScreen.module.sass"
import Dots from "../main-screen/dots/Dots";
import ThanksTitle from "./thanks-title/ThanksTitle";
import {setNowPageType} from "../../../public/staticInfo";
interface IProps {
    setNowPage: setNowPageType
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const ThanksScreen: FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    const [imgSrc, setImgSrc] = useState<string>("/assets/big-photos/aboutBack-small.png")
    useEffect( () => {
        const img = new Image()
        img.src = "/assets/big-photos/aboutBack.png"
        img.onload = () => setImgSrc("/assets/big-photos/aboutBack.png")
    })
    return <div  style={{  backgroundImage: 'url("' + imgSrc + '")'}} className={styles.mainBody}>
        <div>
            <Header setPosition={setPosition} setNowPage={setNowPage} page={'thanks'} />
        </div>

        <div className={styles.titleBody}>
            <ThanksTitle/>
            <Dots/>
        </div>
    </div>
}

export default ThanksScreen