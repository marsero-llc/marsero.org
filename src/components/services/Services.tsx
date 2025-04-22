import {FunctionComponent, memo, useEffect, useState} from "react";
import styles from './Services.module.sass'
const Services: FunctionComponent = () => {
    const [src, setSrc] = useState('')
    const [matrix, setMatrix] = useState<string>('/assets/service/backMatrix-small.png')
    const [design, setDesign] = useState<string>('/assets/service/designBack-small.png')
    const [branding, setBranding] = useState<string>('/assets/service/backBranding-small.png')
    useEffect(() => {
        const imgMatrix = new Image()
        const imgDesign = new Image()
        const imgBranding = new Image()
        imgMatrix.src = matrix
        imgDesign.src = design
        imgBranding.src = branding
        imgMatrix.onload = () => {
            imgMatrix.src = '/assets/service/backMatrix.png'
            imgMatrix.onload = () => {
                setMatrix('/assets/service/backMatrix.png')
            }
        }
        imgDesign.onload = () => {
            imgDesign.src = '/assets/service/designBack.png'
            imgDesign.onload = () => {
                setDesign('/assets/service/designBack.png')
            }
        }
        imgBranding.onload = () => {
            imgBranding.src = '/assets/service/backBranding.png'
            imgBranding.onload = () => {
                setBranding('/assets/service/backBranding.png')
            }
        }

    }, [matrix, branding, design])
    return <div className={styles.servicesBody} style={src === '' ? {background: 'black'} : {backgroundImage: 'url("' + src + '")'}}>
        <span className={styles.service}>/Услуги</span>
        <div className={styles.servicesContent}>
            <span onMouseEnter={() => setSrc(matrix)} onMouseLeave={() => setSrc('')}>РАЗРАБОТКА</span>
            <span onMouseEnter={() => setSrc(design)} onMouseLeave={() => setSrc('')}>WEB-DESIGN</span>
            <span onMouseEnter={() => setSrc(branding)} onMouseLeave={() => setSrc('')}>БРЕНДИНГ</span>
        </div>
    </div>
}

export default memo(Services)