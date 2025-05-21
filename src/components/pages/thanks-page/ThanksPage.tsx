import {FunctionComponent, useEffect, useState} from "react";
import ThanksScreen from "../../thanks-screen/ThanksScreen";
import Footer from "../../footer/Footer";
import DiscussScreen from "../../discuss-screen/DiscussScreen";
import {CSSTransition} from "react-transition-group";
import {nowPageType} from "../../../../public/staticInfo";
import PagesSwitcher from "../../mobile/pages-switcher/PagesSwitcher";
import CallPage from "../../mobile/callPage/CallPage";
import ThanksMobile from "../../mobile/thanks-mobile/ThanksMobile.tsx";
import FooterMobile from "../../mobile/footer-mobile/FooterMobile";

const ThanksPage: FunctionComponent<{ isMobile: boolean }> = ({isMobile}) => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    const [position, setPosition] = useState<number>(0)
    useEffect(() => {
        if (nowPage == 'common')
            window.scrollTo(0, position)
    }, [nowPage])
    return <div>
        {
            isMobile ?
                <div>
                    <CSSTransition in={nowPage == 'common'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                        <div>
                            <ThanksMobile setPosition={setPosition} setNowPage={setNowPage}/>
                            <FooterMobile/>
                        </div>
                    </CSSTransition>
                    <CSSTransition in={nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger'
                                   unmountOnExit>
                        <PagesSwitcher page={'thanks'} setNowPage={setNowPage}/>
                    </CSSTransition>
                    <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'
                                   unmountOnExit>
                        <CallPage setNowPage={setNowPage}/>
                    </CSSTransition>
                </div>
                :
                <div>
                    <CSSTransition in={nowPage == 'common' || nowPage == 'pageChanger'} timeout={250}
                                   classNames='mobilePageChanger' unmountOnExit>
                        <div>
                            <ThanksScreen setPosition={setPosition} setNowPage={setNowPage}/>
                            <Footer/>
                        </div>
                    </CSSTransition>
                    <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'
                                   unmountOnExit>
                        <DiscussScreen setNowPage={setNowPage}/>
                    </CSSTransition>
                </div>
        }
    </div>
}

export default ThanksPage;