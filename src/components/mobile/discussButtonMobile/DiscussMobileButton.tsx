import {FunctionComponent} from "react";
import styles from './DiscussMobileButton.module.sass'
import {setNowPageType} from "../../../../public/staticInfo";

interface IProps {
    setNowPage: setNowPageType,
    setPosition:  (value: (((prevState: number) => number) | number)) => void

}
const DiscussMobileButton:FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    return <button className={styles.discussButtonMobile} onClick={() => {
        setPosition(window.scrollY)
        setNowPage('none')
        setTimeout(() => setNowPage('callPage'), 500)
    }}>
        Обсудить проект
    </button>
}

export default DiscussMobileButton;