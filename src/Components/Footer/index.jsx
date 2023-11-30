import styles from './style.scss'
export  const Footer = () => {

    const sections = ["Календарь",'Курсы','О нас']

    return (
        <div className='footer'>
            <div className='footerLeft'>
                <p className='footerText'>Следите за гонками дронов в социальных сетях</p>
                <div className='socialwebs'>
                    <img src='assets/VK.png' />
                    <img src='assets/TELEGRAM.png' />
                    <img src='assets/YOUTUBE.png' />
                </div>
                <div className='logoSlogan'>
                    <img className='secondlogo' src='assets/logo_2.png' />
                    <p className='footerSlogan'>© 2023-2024 DRONE RACING RT</p>
                </div>

            </div>
            <div className='footerRight'>
                <p className='footerName'> Drone RACING RT</p>
                <div className='footerTabs'>
                    {sections.map((obj) => (
                        <p className='footerSectionName'>{obj}</p>
                    ))}
                </div>
                <div className='footerSponsors'>
                    <a href='https://minsport.gov.ru/'><img src='assets/minsport 1.png' /></a>
                    <a href='http://duma.gov.ru/news/duma/'> <img src='assets/scale_1200 1.png' /></a>
                    <a href='https://moscow.sport/'><img src='assets/ms_logo_rgb_1_kras 1.png' /></a>
                    <a href='https://trurez.ru/'><img src='assets/-.png' /></a>
                    <a href='https://dronesportsglobal.ru/'><img src='assets/drone.png' /></a>
                </div>
            </div>

        </div>
    )
}