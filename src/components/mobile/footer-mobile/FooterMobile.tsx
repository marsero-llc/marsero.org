import {FunctionComponent} from "react";
import {phoneNumber, marseroMail, officialText} from '../../../../public/staticInfo'
import styles from './FooterMobile.module.sass'

const FooterMobile: FunctionComponent = () => {
    return <div className={styles.footerBody}>
        <div className={styles.line}/>
        <img className={styles.image} src={'/assets/MARSERO.svg'}/>
        <div className={styles.textBox}>
            <span>{phoneNumber}</span>
            <span>{marseroMail}</span>
        </div>
            <div className={styles.linkBox}>
                <a href={'https://www.linkedin.com/in/marsero-corporation-986910250/?originalSubdomain=by'} target={'_blank'}/>
                <a href={'https://www.instagram.com/marsero_org/'} target={'_blank'}/>
                <a href={'https://t.me/MARSERO_ORG'} target={'_blank'}/>
            </div>
        <button className={styles.arrowBtn} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}/>
        <span className={styles.officialSpan}>{officialText}</span>
    </div>
}
export default FooterMobile