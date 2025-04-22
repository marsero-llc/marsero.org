import {FunctionComponent, useState} from "react";
import styles from './MarseroAdvantages.module.sass'
import {advantagesList, advantagesListWorkingPage} from '../../../public/staticInfo'
const MarseroAdvantages: FunctionComponent<{page: string}> = ({page}) => {
    const [text, setText] = useState<string>('')
    const [src, setSrc] = useState<string>('')
    return <div className={styles.advantagesBody}>

        {/*Верхний текст*/}
        <div className={styles.advantagesTitleBox}>
            <div/>
            <div className={styles.advantagesTitleContent}>
                <span className={styles.advantagesBigTitle}>ПРЕИМУЩЕСТВА<br/>MARSERO</span>
                <span className={styles.advantagesLittleTitle}>
                    <span className={styles.green}>Уникальные</span> решения.
                    <span className={styles.green}> Уникальная</span> эффективность.
                </span>
            </div>
        </div>


        <div className={ page == 'main-page'
            ?
            styles.advantagesBox + ' ' +  styles.mainPageStyle
            :
            styles.advantagesBox + ' ' +  styles.brandingPageStyle
        }>

            {/*Вывод кнопок*/}
            { page == 'main-page'
                ?
                advantagesList.map( (a, index) =>
                <div key={index}
                     className={styles.advantageBlock}
                     onMouseEnter={() => setText(a.text)}
                     onMouseLeave={() => setText('')}
                     style={text !== '' ?  text == a.text ? {opacity: '1'} : { opacity: '0.3'} : {opacity: '0.5'}}>
                        <div><img src={a.src}/><img src={a.hoverSrc}/></div>
                        <span className={styles.advantageBlockText}>{a.title}</span>
                </div>)
                :
                advantagesListWorkingPage.map( (a, index) =>
                    <div key={index}
                         className={styles.advantageBlock}
                         onMouseEnter={() => setSrc(a.src)}
                         onMouseLeave={() => setSrc('')}
                         style={src !== '' ?  src == a.src ? {opacity: '1'} : { opacity: '0.3'} : {opacity: '0.5'}}>
                        <div><img src={a.src}/><img src={a.hoverSrc}/></div>
                        <span className={styles.advantageBlockText}>{a.title}</span>
                    </div>)
            }


            {/*Появляющийся текст*/}
            <div>
                <span className={styles.advantageText}>{text}</span>
            </div>


        </div>
    </div>
}
export default MarseroAdvantages;