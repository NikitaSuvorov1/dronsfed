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
                <div className={styles.footerMain}>
                    <div className={styles.footerLeft}>
                        <p className={styles.footerText}>Следите за гонками дронов в социальных сетях</p>
                        <div className={styles.socialwebs}>
                            <img className={styles.footerLogo} src='assets/mainLogo.png'/>
                            <a href='https://vk.com/club225210731'> <img loading={"lazy"} src='assets/VK.png'/></a>
                            <a href='https://t.me/tatarstan_drons'><img loading={"lazy"} src='assets/TELEGRAM.png'/></a>
                            <a href='https://www.youtube.com/channel/UCUXqBaImWzbHHFMTUsGWAEQ'><img loading={"lazy"}
                                src='assets/YOUTUBE.png'/></a>
                        </div>
                        <div className={styles.logoSlogan}>
                            <img loading={"lazy"} width={100} height={110} className={styles.secondlogo} src='assets/mainLogo.png'/>
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

                    </div>
                </div>
                <div className={styles.footerSponsors}>
                    <a href='https://minsport.gov.ru/'><img loading={"lazy"} src='assets/minsport 1.png'/></a>
                    <img src='/assets/mainLogo.png' width={150}  />
                    <a href='https://minsport.tatarstan.ru/'><img src='/assets/logoFedRT.png' width={300} /></a>
                    <p>Команда пилотов команды "АкБарс"</p>
                </div>
                <p className={styles.footerRef}>© 2023-2024 DRFRT</p>
            </div>

        </div>

    )
}