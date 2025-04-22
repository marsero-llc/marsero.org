import {FunctionComponent} from "react";
import {officialText} from "../../../../public/staticInfo";
import styles from '../MainScreen.module.sass'

const OfficialText: FunctionComponent = () => {
    return <div className={styles.officialText}>
        {officialText}
    </div>
}

export default OfficialText;