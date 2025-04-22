import {FunctionComponent} from "react";
import styles from './HeaderMobile.module.sass'
import {setNowPageType} from "../../../../public/staticInfo";


const HeaderMobile: FunctionComponent<{setNowPage: setNowPageType}> = ({setNowPage}) => {
    return <div className={styles.headerBody}>

        <img src={'/assets/MARSERO.svg'}/>
        <button onClick={() => {
            setNowPage('none')
            setTimeout(() => setNowPage('pageChanger'), 500)
        }}>
            <div/>
            <div/>
            <div/>
        </button>
    </div>
}
export default HeaderMobile