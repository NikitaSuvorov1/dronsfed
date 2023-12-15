import styles from './style.module.scss'
import {Link} from "react-scroll";
import {PhotoBlock} from "../GeneralBlockPhoto";

export const General = () => {
    return (
        <div className={styles.general}>
            <div className={styles.leftcontent}>
                <div className={styles.ellipse1}  />
                <p className={styles.maintitle}>ФЕДЕРАЦИЯ ГОНОК ДРОНОВ РЕСПУБЛИКИ ТАТАРСТАН</p>
                <p className={styles.subtitle}>Kazan 2024</p>
                <p className={styles.generalText}>Взлетай выше, летай быстрее, вместе с Федерацией гонок дронов Республики
                    Татарстан!</p>
                <div loading={"lazy"} className={styles.ellipse2}  />
            </div>

            <Link to={'register'} offset={-20} smooth={true}><button className={styles.register}>Присоединиться</button></Link>
            <PhotoBlock />

        </div>
    )
}
