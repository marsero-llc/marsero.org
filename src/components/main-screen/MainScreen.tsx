import {FunctionComponent, useEffect, useState} from "react";
import Header from "../header/Header";
import styles from './MainScreen.module.sass'
import TitileMain from "./title-main/TitileMain";
import Dots from "./dots/Dots";
import {setNowPageType} from "../../../public/staticInfo";

interface IProps {
    setNowPage: setNowPageType
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const MainScreen: FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    const [imgSrc, setImgSrc] = useState<string>("/assets/big-photos/main-screen-back-small.png")
    useEffect( () => {
        const img = new Image()
        img.src = "/assets/big-photos/main-screen-back.png"
        img.onload = () => setImgSrc("/assets/big-photos/main-screen-back.png")
    })
    return <div style={{  backgroundImage: 'url("' + imgSrc + '")'}} className={styles.mainBody}>
        <div>
            <Header setPosition={setPosition}  setNowPage={setNowPage} page={'main'}/>
        </div>

        <div className={styles.titleBox}>
            <TitileMain/>
            <Dots/>
        </div>
    </div>
}

export default MainScreen;