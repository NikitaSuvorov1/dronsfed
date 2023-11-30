import styles from './style.scss'
import {Link, animateScroll as scroll} from "react-scroll";
import {General} from "../General";

export const Header = () => {

    const tabs = [{"section": 'Календарь', "name": "calendarTitle"},
        {"section": 'Курсы', "name": "formTitle"},
        {"section": 'О нас', "name": "info"}
    ]

    return (
        <>
            <div className='header'>
                <img onClick={() => window.scrollTo(0,0)} style={{cursor: "pointer"}} width={90} height={90} src='assets/LOGO.png'/>
                <div className='tabs'>
                    {tabs.map((tab) => (
                        <Link to={tab.name} smooth={true}><p className='tags'>
                            {tab.section}
                        </p></Link>
                    ))}

                </div>
                <Link to={'formTitle'} smooth={true}><button className='register'>Присоединиться</button></Link>
            </div>
        </>
    )
}