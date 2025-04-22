import {FunctionComponent, useEffect, useState} from "react";
import WebDesignScreen from "../../web-design-screen/WebDesignScreen";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import KeyDesign from "../../key-design/KeyDesign";
import Categories from "../../categories/Categories";
import Circles from "../../circles/Circles";
import Steps from "../../steps/Steps";
import DiscussScreen from "../../discuss-screen/DiscussScreen";
import {nowPageType} from "../../../../public/staticInfo";
import {CSSTransition} from "react-transition-group";
import PagesSwitcher from "../../mobile/pages-switcher/PagesSwitcher";
import CallPage from "../../mobile/callPage/CallPage";
import WebDesignMobileScreen from "../../mobile/web-design-mobile-screen/WebDesignMobileScreen";
import CategoriesMobile from "../../mobile/category-mobile/CategoryMobile";
import KeyDesignMobile from "../../mobile/keyDesignMobile/KeyDesignMobile";
import FooterMobile from "../../mobile/footer-mobile/FooterMobile";

const WebDesignPage: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
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
                        <WebDesignMobileScreen setPosition={setPosition} setNowPage={setNowPage}/>
                        <CategoriesMobile page={'design'}/>
                        <KeyDesignMobile page={'design'}/>
                        <Steps isMobile={isMobile} page={'design'}/>
                        <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'design'}/>
                        <FooterMobile/>
                    </div>
                </CSSTransition>
                <CSSTransition in={nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
                    <PagesSwitcher page={'design'} setNowPage={setNowPage}/>
                </CSSTransition>
                <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
                    <CallPage setNowPage={setNowPage}/>
                </CSSTransition>
            </div>
            :
            <div>
                <CSSTransition in={nowPage == 'common' || nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                    <div>
                        <WebDesignScreen setPosition={setPosition} setNowPage={setNowPage}/>
                        <div style={{margin: '10.41vw 0 24.53vw 0'}}>
                        <Categories page={'design'}/>
                        </div>
                        <Circles page={'design'}/>
                        <div style={{margin: '19.27vw 0'}}>
                        <KeyDesign setPosition={setPosition} setNowPage={setNowPage} page={'design'}/>
                        </div>
                        <Steps isMobile={isMobile} page={'design'}/>
                        <div style={{margin: '13.33vw 0 10.41vw 0'}}>
                        <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'design'}/>
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
export default WebDesignPage