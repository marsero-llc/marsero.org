import {FunctionComponent} from "react";
import styles from './Ending.module.sass'
import {setNowPageType} from "../../../public/staticInfo";
import DiscussButton from "../header/discussButton/DiscussButton";
import DiscussMobileButton from "../mobile/discussButtonMobile/DiscussMobileButton";

interface IProps {
    isMobile: boolean,
    page: string,
    setNowPage: setNowPageType,
    setPosition:  (value: (((prevState: number) => number) | number)) => void

}

const Ending: FunctionComponent<IProps> = ({ page , setNowPage, isMobile, setPosition}) => {
    return <div className={styles.endingBody}>
        <div className={styles.endingContent}>
        <div className={styles.back}>
            <div className={styles.firstLine}/>
            <div className={styles.secondLine}/>
            <div className={styles.thirdLine}/>
            <div className={styles.firstDot}/>
            <div className={styles.secondDot}/>
            <span className={styles.firstSpan}>Уникальный дизайн</span>
            { isMobile ?
                <span className={styles.secondSpan}>Техподдержка</span>
                :
                <span className={styles.secondSpan}>Техподдержка и консультация</span>
            }
            </div>
            {   isMobile
                ?
                page == 'about'
                ?
                    <div  className={styles.titleBox}>
                        <span className={styles.titleTextAboutPage}>МЫ ЗАБЕРЕМ<br/>ВАШУ БОЛЬ<br/>И <span className={styles.titleGreen}>ТРАНСФОРМИРУЕМ<br/></span> ЕЁ В ВЫГОДУ!</span>
                    </div>
                    :
                <div  className={styles.titleBox}>
                    <span className={styles.titleText}>ВЫВЕДИТЕ<br/>БИЗНЕС<br/>НА <span className={styles.titleGreen}>НОВЫЙ<br/></span> УРОВЕНЬ</span>
                </div>
                :
                page == 'about'
                ?
                <div  className={styles.titleBox}>
                    <span className={styles.titleTextAboutPage}>МЫ ЗАБЕРЕМ ВАШУ БОЛЬ И ТРАНСФОРМИРУЕМ</span>
                    <span className={styles.titleTextAboutPage}>ЕЕ В <span className={styles.titleGreen}>ВЫГОДУ</span> ДЛЯ ВАШЕГО БИЗНЕСА!</span>
                </div>
                :
                <div  className={styles.titleBox}>
                    <span className={styles.titleText}>ВЫВЕДИТЕ БИЗНЕС</span>
                    <span className={styles.titleText}>НА <span className={styles.titleGreen}>НОВЫЙ</span> УРОВЕНЬ С MARSERO</span>
                </div>
            }
        </div>
        { isMobile
            ?
            <DiscussMobileButton setPosition={setPosition} setNowPage={setNowPage}/>
            :
            <DiscussButton setPosition={setPosition} setNowPage={setNowPage}/>
        }

    </div>
}
export default Ending