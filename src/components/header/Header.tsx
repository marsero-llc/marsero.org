import {FunctionComponent} from "react";
import {phoneNumber, setNowPageType} from '../../../public/staticInfo'
import styles from './Header.module.sass'
import DiscussButton from "./discussButton/DiscussButton";
import Links from "./links/Links";

interface IProps {
    page: string
    setNowPage: setNowPageType
    setPosition:  (value: (((prevState: number) => number) | number)) => void
}

const Header:FunctionComponent<IProps> = ({page, setNowPage, setPosition}) => {
    return <header className={styles.header}>
        <img className={styles.imgMarsero} src='/assets/MARSERO.svg'/>
        <Links page={page}/>
        <span className={styles.phone}>{phoneNumber}</span>
        <DiscussButton setPosition={setPosition} setNowPage={setNowPage}/>
    </header>
}

export default Header;