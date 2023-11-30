import styles from './style.scss'
import {Link, animateScroll as scroll} from "react-scroll";
import {General} from "../General";

export const Header = () => {

    const tabs = [{"section": 'Календарь', "name": "calendar"},
        {"section": 'Курсы', "name": "course"},
        {"section": 'О нас', "name": "info"}
    ]

    return (
        <>
            <div className='header'>
                <img style={{cursor: "pointer"}} width={90} height={90} src='assets/LOGO.png'/>
                <div className='tabs'>
                    {tabs.map((tab) => (
                        <Link to={tab.name} smooth={true}><p className='tags'>
                            {tab.section}
                        </p></Link>
                    ))}

                </div>
                <button className='register'>Присоединиться</button>
            </div>
        </>
    )
}