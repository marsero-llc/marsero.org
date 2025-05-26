import {FunctionComponent, lazy, Suspense, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loading from "./components/Loading/Loading";


const MainPage = lazy( () => import("./components/pages/main-page/MainPage"))
const WorkingPage = lazy( () => import("./components/pages/working-page/WorkingPage"))
const BrandingPage = lazy( () => import("./components/pages/branding-page/BrandingPage"))
const WebDesignPage = lazy(() => import("./components/pages/web-design-page/WebDesignPage"))
const AboutPage = lazy( () => import("./components/pages/about-page/AboutPage"))
const ThanksPage = lazy( () => import("./components/pages/thanks-page/ThanksPage.tsx"))

const Router: FunctionComponent = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 560)
    useEffect( () => {
        const checkMobile: () => void = () => {
            setIsMobile(window.innerWidth <= 560)
        }
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])
    return <BrowserRouter>
        <Routes>
            <Route element={
                <Suspense fallback={<Loading/>}>
                    <MainPage isMobile={isMobile}/>
                </Suspense>} path={'/'}/>
            <Route element={
                <Suspense fallback={<Loading/>}>
                    <AboutPage isMobile={isMobile}/>
                </Suspense>}
                   path={'/about'}/>
            <Route element={
                <Suspense fallback={<Loading/>}>
                <WebDesignPage isMobile={isMobile}/>
            </Suspense>}
                   path={'/design'}/>
            <Route element={
                <Suspense fallback={<Loading/>}>
                    <WorkingPage isMobile={isMobile}/>
            </Suspense>}
                   path={'/working'}/>
            <Route element={
                <Suspense fallback={<Loading/>}>
                    <BrandingPage isMobile={isMobile}/>
            </Suspense>}
                   path={'/branding'}/>
            <Route element={
                <Suspense fallback={<Loading/>}>
                    <ThanksPage isMobile={isMobile}/>
                </Suspense>}
                   path={'/thanks'}/>
        </Routes>
    </BrowserRouter>
}

export default Router