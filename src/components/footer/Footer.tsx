import {FunctionComponent} from "react";
import {infoMail, officialText, phoneNumber} from '../../../public/staticInfo'
import {Link} from "react-router-dom";
import styles from './Footer.module.sass'
const Footer: FunctionComponent = () => {
    return<div className={styles.footerBody}>
        <div className={styles.line}/>
        <div className={styles.leftContent}>
            <div><img src={'/assets/MARSERO.svg'}/></div>
            <div><span className={styles.officialText}>{officialText}</span></div>
        </div>
        <div className={styles.rightContent}>
            <div>
                <span>КОНТАКТЫ</span>
                <span>{phoneNumber}</span>
                <span>{infoMail}</span>
            </div>
            <div>
                <span>СТРАНИЦЫ</span>
                <span><Link className={styles.link} to={'/'}>Главная</Link></span>
                <span><Link className={styles.link}  to={'/design'}>Web-design</Link></span>
                <span><Link className={styles.link}  to={'/branding'}>Брендинг</Link></span>
                <span><Link className={styles.link}  to={'/working'}>Разработка</Link></span>
            </div>
            <div>
                <span>МЫ В СЕТЯХ</span>
                <a href={'https://www.instagram.com/marsero_org/'} target={'_blank'}>Instagram</a>
                <a href={'https://www.linkedin.com/in/marsero-corporation-986910250/?originalSubdomain=by'} target={'_blank'}>Linkedin</a>
            </div>
        </div>
    </div>
}
export default Footer