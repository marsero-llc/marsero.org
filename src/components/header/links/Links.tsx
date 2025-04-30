import {FunctionComponent} from "react";
import {Link} from "react-router-dom";
import styles from './../Header.module.sass'

const Links:FunctionComponent<{page: string}> = ({page}) => {

    return <span className={styles.linkBox}>
        <Link className={page==='main' ? styles.lightLink : styles.link} to={'/'} >Главная</Link>
        <Link className={page==='about' ? styles.lightLink : styles.link} to={'/about'}>О нас</Link>
        {/* <Link className={page==='design' ? styles.lightLink : styles.link} to={'/design'}>Веб-дизайн</Link> */}
        <Link className={page==='working' ? styles.lightLink : styles.link} to={'/working'}>Разработка</Link>
        <Link className={page==='branding' ? styles.lightLink : styles.link} to={'/branding'}>Брендинг</Link>
    </span>
}

export default Links;