import styles from './KeyDesign.module.sass'
import {FunctionComponent} from "react";
import DiscussButton from "../header/discussButton/DiscussButton";
import {setNowPageType} from "../../../public/staticInfo";
import Photo from "../photo/Photo";

interface IProps {
    page: string,
    setNowPage: setNowPageType
    setPosition:  (value: (((prevState: number) => number) | number)) => void
}
const KeyDesign: FunctionComponent<IProps> = ({page, setNowPage, setPosition}) => {
    return <div className={styles.keyDesignBody}>

        {/*Верхний текст*/}
        <div className={styles.keyDesignTitleBody}>
            <span className={styles.keyDesignLittleTitle}>{ page == 'branding' ? '/Разработка брендинга' :
                page == 'main-page' ? '/Дизайн сайта' :'/Разработка дизайна сайта'}</span>
            { page == 'branding' ?
                <span className={styles.keyDesignBigTitle}>МЫ ВЕРИМ<br/>В ВАШ БРЕНД</span>
                :
                page == 'main-page' ?
                    <span className={styles.keyDesignBigTitle}>САЙТЫ КОТОРЫЕ<br/>ПРИНОСЯТ КЛИЕНТОВ</span>
                    :
                <span className={styles.keyDesignBigTitle}>РАЗРАБОТАЕМ<br/>ДИЗАЙН ПОД КЛЮЧ</span>
            }
        </div>

        {/*Верхний блок фотографий*/}
        <div className={page == 'branding' ? styles.topImagesBoxBranding : styles.topImagesBox}>
            <div>
                { page == 'branding' ?
                 <Photo src={'/assets/keyDesign/keyDesign8.png'} smallSrc={'/assets/keyDesign/keyDesign8-small.png'}/>
                : <Photo src={'/assets/keyDesign/keyDesign.png'} smallSrc={'/assets/keyDesign/keyDesign-small.png'}/>
            }
            </div>
            <div>
                { page == 'branding' ?
                <Photo src={'/assets/keyDesign/keyDesign9.png'} smallSrc={'/assets/keyDesign/keyDesign9-small.png'}/> :
                    <Photo src={'/assets/keyDesign/keyDesign2.png'} smallSrc={'/assets/keyDesign/keyDesign2-small.png'}/>
                }
            </div>
            <div>
                { page == 'branding' ?
                    <Photo src={'/assets/keyDesign/keyDesign10.png'} smallSrc={'/assets/keyDesign/keyDesign10-small.png'}/>
                    :
                    page == 'design' ?
                    <Photo src={'/assets/keyDesign/keyDesign3.png'} smallSrc={'/assets/keyDesign/keyDesign3-small.png'}/> : <div/> }
            </div>
        </div>


        {/*Нижний текст*/}
        <div className={styles.keyDesignTextBlock}>
            {
                page == 'main-page' ?
                    <div  className={styles.brandingText}>
                        <span>/Брендинг</span>
                    </div>
                    :
                    <div/>
            }
            {
                page == 'main-page' ?
                    <div className={styles.keyDesignTextMainPage}>
                        <span>СОЗДАЙТЕ</span>
                        <span>ПРИВЛЕКАТЕЛЬНЫЙ</span>
                        <span>ОБРАЗ БИЗНЕСА</span>
                    </div>
                    :
                    <div className={styles.keyDesignTextDesignPage}>
                        <span>Благодаря дизайну и более широкому контексту.</span>
                        <span>Мы верим, что каждый может изменить ситуацию.</span>
                        <span>Это наша цель: продвигать ваши идеи.</span>
                    </div>
            }
        </div>

        {/*Нижний блок фотографий*/}
        <div style={{position: 'relative'}}>
            <div className={styles.keyDesignBottomPhotos}>
                <div>
                    {page === 'main-page' || page === 'branding'
                    ? <Photo src={'/assets/keyDesign/keyDesign4.png'} smallSrc={'/assets/keyDesign/keyDesign4-small.png'}/> :
                        <Photo src={'/assets/keyDesign/keyDesign6.png'} smallSrc={'/assets/keyDesign/keyDesign6-small.png'}/>
                    }
                </div>
                <div>
                    {page === 'main-page' || page == 'branding'
                    ?
                        <Photo src={'/assets/keyDesign/keyDesign5.png'} smallSrc={'/assets/keyDesign/keyDesign5-small.png'}/> :
                        <Photo src={'/assets/keyDesign/keyDesign7.png'} smallSrc={'/assets/keyDesign/keyDesign7-small.png'}/>
                    }
                    {page == 'branding' ? <div><DiscussButton setPosition={setPosition} setNowPage={setNowPage}/></div> : <div/>}
                </div>
            </div>
        </div>


    </div>
}
export default KeyDesign;