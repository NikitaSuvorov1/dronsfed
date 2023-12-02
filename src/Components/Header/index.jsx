import styles from './style.module.scss'
import {Link, animateScroll as scroll, animateScroll} from "react-scroll";
import {General} from "../General";


export const Header = () => {

    const tabs = [{"section": 'Календарь', "height": 2400},
        {"section": 'Курсы', "height": 3200},
        {"section": 'О нас', "height": 500},
        {"section":"Контанты","height":6300}
    ]



    return (
        <div className={styles.root}>
            <div className={styles.root}>
                <Link to={'container'} smooth={true}><img  style={{cursor: "pointer"}} width={90} height={90} src='assets/LOGO.png'/></Link>
                <div className={styles.tabs}>
                    {tabs.map((tab) => (
                        <Link to={tab.name} smooth={true}><p onClick={() => animateScroll.scrollTo(tab.height)} className={styles.tags}>
                            {tab.section}
                        </p></Link>
                    ))}

                </div>
                <Link to={'formTitle'} smooth={true}><button className={styles.register}>Присоединиться</button></Link>
            </div>
        </div>
    )
}