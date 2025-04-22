import {FunctionComponent, useEffect, useState} from "react";
import styles from './Photo.module.sass'

interface IProps {
    src: string,
    smallSrc: string
    className?: string
    style?: object
}
const Photo: FunctionComponent<IProps> = ({ src , smallSrc, className = styles.photo, style}) => {
    const [imgSrc, setImgSrc] = useState<string>(smallSrc)
    useEffect( () => {
        const img = new Image()
        img.src = src
        img.onload = () => {
            setImgSrc(src)
        }
    })
    return <img src={imgSrc} className={className} style={style}/>
}
export default Photo;