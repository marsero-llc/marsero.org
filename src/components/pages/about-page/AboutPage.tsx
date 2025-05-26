import { FunctionComponent, useEffect, useState } from "react";
import AboutScreen from "../../about-screen/AboutScreen";
import Mission from "../../mission/Mission";
import Photo from "../../photo/Photo";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import Value from "../../value/Value";
import DiscussScreen from "../../discuss-screen/DiscussScreen";
import { CSSTransition } from "react-transition-group";
import { nowPageType } from "../../../../public/staticInfo";
import PagesSwitcher from "../../mobile/pages-switcher/PagesSwitcher";
import CallPage from "../../mobile/callPage/CallPage";
import AboutMobile from "../../mobile/about-mobile/AboutMobile";
import Steps from "../../steps/Steps";
import FooterMobile from "../../mobile/footer-mobile/FooterMobile";

const AboutPage: FunctionComponent<{ isMobile: boolean }> = ({ isMobile }) => {
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
              <AboutMobile setPosition={setPosition} setNowPage={setNowPage} />
              <Mission isMobile={isMobile} />
              <Photo smallSrc={'/assets/big-photos/aboutMobilePhoto-small.png'} src={'/assets/big-photos/aboutMobilePhoto.png'} />
              <Steps isMobile={isMobile} page={'about-mobile'} />
              <div style={{ margin: '-66.6vw 0 0 0' }}>
                <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'about'} />
              </div>
              <FooterMobile />
            </div>
          </CSSTransition>
          <CSSTransition in={nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <PagesSwitcher page={'about'} setNowPage={setNowPage} />
          </CSSTransition>
          <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <CallPage setNowPage={setNowPage} />
          </CSSTransition>
        </div>
        :
        <div>
          <CSSTransition in={nowPage == 'common' || nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <div>
              <AboutScreen setPosition={setPosition} setNowPage={setNowPage} />
              <Mission isMobile={isMobile} />
              <Photo smallSrc={'/assets/big-photos/Group.png'} src={'/assets/big-photos/Group.png'} />
              <div style={{ marginTop: '7.96vw' }}>
                <Value />
              </div>
              <div style={{ margin: '7.5vw 0 5.2vw 0' }}>
                <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'about'} />
              </div>
              <Footer />
            </div>
          </CSSTransition>
          <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <DiscussScreen setNowPage={setNowPage} />
          </CSSTransition>
        </div>
    }
  </div>
}

export default AboutPage;