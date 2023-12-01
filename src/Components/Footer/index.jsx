import styles from './style.scss'
import {Link} from "react-scroll";

export const Footer = () => {

    const tabs = [{"section": 'Календарь', "name": "calendarTitle"},
        {"section": 'Курсы', "name": "formTitle"},
        {"section": 'О нас', "name": "info"}
    ]
    return (
        <div className='footer'>
            <div className='footerLeft'>
                <p className='footerText'>Следите за гонками дронов в социальных сетях</p>
                <div className='socialwebs'>
                    <a href='https://vk.com/club223653806'> <img src='assets/VK.png'/></a>
                    <a href='https://t.me/tatarstan_drons'><img src='assets/TELEGRAM.png'/></a>
                    <a href='https://www.youtube.com/channel/UCUXqBaImWzbHHFMTUsGWAEQ'><img src='assets/YOUTUBE.png'/></a>
                </div>
                <div className='logoSlogan'>
                    <img className='secondlogo' src='assets/logo_2.png'/>
                    <p className='footerSlogan'>© 2023-2024 DRONE RACING RT</p>
                </div>

            </div>
            <div className='footerRight'>
                <p className='footerName'> Drone RACING RT</p>
                <div className='footerTabs'>
                    {tabs.map((obj) => (
                        <Link to={obj.name} smooth={true}><p className='footerSectionName'>{obj.section}</p></Link>
                    ))}
                </div>
                <div className='footerSponsors'>
                    <a href='https://minsport.gov.ru/'><img src='assets/minsport 1.png'/></a>
                    <a href='http://duma.gov.ru/news/duma/'> <img src='assets/scale_1200 1.png'/></a>
                    <a href='https://moscow.sport/'><img src='assets/ms_logo_rgb_1_kras 1.png'/></a>
                    <a href='https://trurez.ru/'><img src='assets/-.png'/></a>
                    <a href='https://dronesportsglobal.ru/'><img src='assets/drone.png'/></a>
                </div>
            </div>

        </div>
    )
}