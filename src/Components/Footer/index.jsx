import styles from './style.module.scss'
import {Link} from "react-scroll";

export const Footer = () => {

    const tabs = [{"section": 'Календарь', "name": "calendar"},
        {"section": 'Курсы', "name": "course"},
        {"section": 'О нас', "name": "info"}
    ]
    return (
        <div className='footer'>
            <div className={styles.footer}>
                <div className={styles.footerLeft}>
                    <p className={styles.footerText}>Следите за гонками дронов в социальных сетях</p>
                    <div className={styles.socialwebs}>
                        <a href='https://vk.com/club223653806'> <img src='assets/VK.png'/></a>
                        <a href='https://t.me/tatarstan_drons'><img src='assets/TELEGRAM.png'/></a>
                        <a href='https://www.youtube.com/channel/UCUXqBaImWzbHHFMTUsGWAEQ'><img
                            src='assets/YOUTUBE.png'/></a>
                    </div>
                    <div className={styles.logoSlogan}>
                        <img className={styles.secondlogo} src='assets/logo_2.png'/>
                        <p className={styles.footerSlogan}>© 2023-2024 DRONE RACING RT</p>
                    </div>

                </div>
                <div className={styles.footerRight}>
                    <p className={styles.footerName}> Drone RACING RT</p>
                    <div className={styles.footerTabs}>
                        {tabs.map((obj) => (
                            <Link offset={-100} to={obj.name} smooth={true}><p key={obj.name} className={styles.footerSectionName}>{obj.section}</p>
                            </Link>
                        ))}
                    </div>
                    <div className={styles.footerSponsors}>
                        <a href='https://minsport.gov.ru/'><img src='assets/minsport 1.png'/></a>
                        <a href='http://duma.gov.ru/news/duma/'> <img src='assets/scale_1200 1.png'/></a>
                        <a href='https://moscow.sport/'><img src='assets/ms_logo_rgb_1_kras 1.png'/></a>
                        <a href='https://trurez.ru/'><img src='assets/-.png'/></a>
                        <a href='https://dronesportsglobal.ru/'><img src='assets/drone.png'/></a>
                    </div>
                </div>

            </div>
        </div>

    )
}