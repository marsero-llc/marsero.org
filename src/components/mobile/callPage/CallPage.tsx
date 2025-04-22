import {FunctionComponent} from "react";
import styles from './CallPage.module.sass'
import { setNowPageType} from "../../../../public/staticInfo";

const CallPage: FunctionComponent<{setNowPage: setNowPageType}> = ({setNowPage}) => {
    return <div className={styles.callBody}>
        <div className={styles.header}>
            <img className={styles.marseroImg} src={'/assets/MARSERO.svg'}/>
            <button className={styles.closeBtn} onClick={() => {
                setNowPage('none')
                setTimeout(() => setNowPage('common'), 500)
            }}>
                <div/>
                <div/>
            </button>
        </div>
        <div className={styles.callBlock}>
                <span className={styles.callBigTitle}>
                    ОБРАТНЫЙ<br/>ЗВОНОК
                </span>
                <span className={styles.spanBlock}>
                    <span className={styles.green}>Уникальные</span> решения. <span className={styles.green}>Уникальная</span> эффективность.
                </span>
                <form className={styles.formBox}>
                    <input className={styles.input} placeholder={'Имя'} type='text'/>
                    <input className={styles.input} placeholder={'Номер телефона'} type='tel'/>
                    <input className={styles.input} placeholder={'E-mail'} type='email'/>
                    <input className={styles.sendBtn} type='submit'/>
                </form>
        </div>
    </div>
}
export default CallPage