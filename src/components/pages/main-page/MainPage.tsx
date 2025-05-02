import {FunctionComponent, useEffect, useState} from "react";
import MainScreen from "../../main-screen/MainScreen";
import Services from "../../services/Services";
import Photo from "../../photo/Photo";
import Steps from "../../steps/Steps";
import MarseroAdvantages from "../../marsero-advantages/MarseroAdvantages";
import Technologies from "../../technologies/Technologies";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import DiscussScreen from "../../discuss-screen/DiscussScreen";
import MainScreenMobile from "../../mobile/main-screen-mobile/MainScreenMobile";
import ServicesMobile from "../../mobile/services-mobile/ServicesMobile";
import AdvantagesMobile from "../../mobile/advantages-mobile/AdvantagesMobile";
import FooterMobile from "../../mobile/footer-mobile/FooterMobile";
import PagesSwitcher from "../../mobile/pages-switcher/PagesSwitcher";
import { CSSTransition } from  'react-transition-group'
import './../../../index.scss'
import CallPage from "../../mobile/callPage/CallPage";
import { nowPageType } from './../../../../public/staticInfo'

const MainPage: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    const [position, setPosition] = useState<number>(0)
    useEffect( () => {
        if (nowPage == 'common')
            window.scrollTo(0, position)
    }, [nowPage])
    return <div>
        {
            isMobile ?
                <div>
                    <CSSTransition in={nowPage == 'common'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                        <div>
                            <MainScreenMobile setPosition={setPosition} setNowPage={setNowPage}/>
                            <div style={{margin: '-10.55vw 0 0 0'}}>
                                <ServicesMobile/>
                            </div>
                            <Photo smallSrc={'/assets/big-photos/main-page-photo-small.png'} src={'/assets/big-photos/main-page-photo.png'}/>
                            <div style={{margin: '0 0 -24.44vw 0'}}>
                            <Steps isMobile={isMobile} page={'main-page'}/>
                            </div>
                            <AdvantagesMobile/>
                            <Technologies isMobile={isMobile}/>
                            <Ending setPosition={setPosition} isMobile={isMobile} page={'main-page'} setNowPage={setNowPage}/>
                            <FooterMobile/>
                        </div>
                    </CSSTransition>
                    <CSSTransition in={nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
                        <PagesSwitcher page={'main'} setNowPage={setNowPage}/>
                    </CSSTransition>
                    <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
                        <CallPage setNowPage={setNowPage}/>
                    </CSSTransition>
                </div>
                :
                <div>
                        <CSSTransition in={nowPage == 'common' || nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                            <div>
                                <MainScreen setNowPage={setNowPage} setPosition={setPosition}/>
                                <Services/>
                                <Photo smallSrc={'/assets/big-photos/Group_small.png'} src={'/assets/big-photos/Group.png'}/>
                                <div style={{margin: '16.66vw 0 17.604vw 0'}}>
                                    <Steps isMobile={isMobile} page={'main-page'}/>
                                </div>
                                {/* <KeyDesign setPosition={setPosition} setNowPage={setNowPage} page={'main-page'}/> */}
                                <div style={{margin: '17.6vw 0 16.19vw 0'}}>
                                    <MarseroAdvantages page={'main-page'}/>
                                </div>
                                <Technologies isMobile={isMobile}/>
                                <div style={{margin: '12.03vw 0 10.41vw 0'}}>
                                    <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'main-page'}/>
                                </div>
                                <Footer/>
                            </div>
                        </CSSTransition>
                        <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
                            <DiscussScreen setNowPage={setNowPage}/>
                        </CSSTransition>
                </div>
        }

    </div>
}
export default MainPage;