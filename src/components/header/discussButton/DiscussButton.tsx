import {FunctionComponent} from "react";
import styles from './../Header.module.sass'
import {setNowPageType} from "../../../../public/staticInfo";

interface IProps {
    setNowPage: setNowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const DiscussButton:FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    return <button className={styles.discussButton} onClick={() => {
        setPosition(window.scrollY)
        setNowPage('none')
        setTimeout( () => setNowPage('callPage'), 240)
    }
    }>
        Обсудить проект
    </button>
}

export default DiscussButton;