import {FunctionComponent, useEffect, useState} from "react";
import BrandingScreen from "../../branding-screen/BrandingScreen";
import BuisnessActivity from "../../buisness-activity/BuisnessActivity";
import MarseroAdvantages from "../../marsero-advantages/MarseroAdvantages";
import KeyDesign from "../../key-design/KeyDesign";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import DiscussScreen from "../../discuss-screen/DiscussScreen";
import {nowPageType} from "../../../../public/staticInfo";
import {CSSTransition} from "react-transition-group";
import KeyDesignMobile from "../../mobile/keyDesignMobile/KeyDesignMobile";
import FooterMobile from "../../mobile/footer-mobile/FooterMobile";
import PagesSwitcher from "../../mobile/pages-switcher/PagesSwitcher";
import CallPage from "../../mobile/callPage/CallPage";
import BrandingMobileScreen from "../../mobile/branding-mobile-page/BrandingMobilePage";
import AdvantagesMobile from "../../mobile/advantages-mobile/AdvantagesMobile";



const BrandingPage: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    const [position, setPosition] = useState<number>(0)
    useEffect( () => {
        if (nowPage == 'common')
            window.scrollTo(0, position)
    }, [nowPage])
    return <div>
        { isMobile
            ?
            <div>
                <CSSTransition in={nowPage == 'common'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                    <div>
                        <BrandingMobileScreen setPosition={setPosition} setNowPage={setNowPage}/>
                        <BuisnessActivity isMobile={isMobile}/>
                        <AdvantagesMobile/>
                        <KeyDesignMobile  page={'branding'}/>
                        <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'branding'}/>
                        <FooterMobile/>
                    </div>
                </CSSTransition>
                <CSSTransition in={nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
                    <PagesSwitcher page={'branding'} setNowPage={setNowPage}/>
                </CSSTransition>
                <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
                    <CallPage setNowPage={setNowPage}/>
                </CSSTransition>
            </div>
            :
            <div>
                <CSSTransition in={nowPage == 'common' || nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                    <div>
                        <BrandingScreen setPosition={setPosition} setNowPage={setNowPage}/>
                        <BuisnessActivity isMobile={isMobile}/>
                        <div style={{margin: '4.16vw 0 22.23vw 0'}}>
                            <MarseroAdvantages page={'branding'}/>
                        </div>
                        <KeyDesign setPosition={setPosition} setNowPage={setNowPage} page={'branding'}/>
                        <div style={{margin: '0 0 10.4vw 0'}}>
                        <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'branding'}/>
                        </div>
                        <Footer/>
                    </div>
                </CSSTransition>
                <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                    <DiscussScreen setNowPage={setNowPage}/>
                </CSSTransition>
            </div>
        }
    </div>
}
export default BrandingPage;