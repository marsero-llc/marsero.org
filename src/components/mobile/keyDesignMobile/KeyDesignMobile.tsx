import styles from './KeyDesignMobile.module.sass'
import {FunctionComponent} from "react";
import Photo from "../../photo/Photo";


const KeyDesignMobile: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={styles.keyDesignBody}>

        {/*Верхний текст*/}
        <div className={styles.keyDesignTitleBody}>
            <span className={styles.keyDesignLittleTitle}>{ page == 'branding' ? '/Разработка брендинга' : '/Разработка дизайна сайта'}</span>
            { page == 'branding' ?
                <span className={styles.keyDesignBigTitle}>МЫ ВЕРИМ<br/>В ВАШ БРЕНД</span>
                :
                <span className={styles.keyDesignBigTitle}>РАЗРАБОТАЕМ<br/>ДИЗАЙН САЙТА</span>
            }
        </div>

        {/*Нижний текст*/}
        <div>
            {
                page == 'main-page' ?
                    <div className={styles.keyDesignTextMainPage}>
                        <span>СОЗДАЙТЕ</span>
                        <span>ПРИВЛЕКАТЕЛЬНЫЙ</span>
                        <span>ОБРАЗ БИЗНЕСА</span>
                    </div>
                    :
                    <div className={styles.keyDesignTextDesignPage}>
                        <span>Благодаря дизайну и более широкому<br/> контексту. Наша цель: продвигать ваши идеи.</span>
                    </div>
            }
        </div>


        <div className={page == 'branding' ? styles.topImagesBoxBranding : styles.topImagesBox}>
            { page == 'branding' ?
                <Photo smallSrc={'/assets/keyDesign/keyDesign8-small.png'} src={'/assets/keyDesign/keyDesign8.png'}/> :
                <Photo smallSrc={'/assets/keyDesign/keyDesign.png'} src={'/assets/keyDesign/keyDesign-small.png'}/>
            }

                { page == 'branding' ?
                <Photo src={'/assets/keyDesign/keyDesign9.png'} smallSrc={'/assets/keyDesign/keyDesign9-small.png'}/> :
                    <Photo src={'/assets/keyDesign/keyDesign2.png'} smallSrc={'/assets/keyDesign/keyDesign2-small.png'}/>
                }

                { page == 'branding' ? <Photo src={'/assets/keyDesign/keyDesign10.png'} smallSrc={'/assets/keyDesign/keyDesign10-small.png'}/> :
                    page == 'design' ?
                    <Photo src={'/assets/keyDesign/keyDesign3.png'} smallSrc={'/assets/keyDesign/keyDesign3-small.png'}/> : <div/> }


                    {page == 'branding'
                    ?
                        <Photo src={'/assets/keyDesign/keyDesign4.png'} smallSrc={'/assets/keyDesign/keyDesign4-small.png'}/> :
                        <Photo src={ '/assets/keyDesign/keyDesign6.png'} smallSrc={'/assets/keyDesign/keyDesign6-small.png'}/>
                    }
                {page == 'branding'
                    ?
                    <Photo src={'/assets/keyDesign/keyDesign5.png'} smallSrc={'/assets/keyDesign/keyDesign5-small.png'}/>
                    :
                    <Photo src={'/assets/keyDesign/keyDesign7.png'} smallSrc={'/assets/keyDesign/keyDesign7-small.png'}/>
                }

        </div>

    </div>
}
export default KeyDesignMobile;