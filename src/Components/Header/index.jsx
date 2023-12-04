import styles from './style.module.scss'
import {Link} from "react-scroll";
import {useState} from "react";

export const Header = () => {




    const tabs = [{"section": 'Календарь', "name": "calendar"},
        {"section": 'Курсы', "name": "course"},
        {"section": 'О нас', "name": 'info'},
            {"section":"Контакты","name":'footer'}
    ]

    const [tabsOpen,setTabsOpen] = useState(false)

    const openTabs = () => {
        setTabsOpen(!tabsOpen)
        console.log(tabsOpen)
    }


    return (
        <div className={styles.root}>
            <div className={styles.menu}>
                <Link to={'general'} smooth={true}><img  className={styles.logo} width={90} height={90} src='assets/LOGO.png'/></Link>
                <div className={styles.tabs}>
                    {tabs.map((tab) => (
                        <Link offset={-130} to={tab.name} smooth={true}><p key={tab.section}  className={styles.tags}>
                            {tab.section}
                        </p></Link>
                    ))}

                </div>
                <Link to={'register'} offset={-20} smooth={true}><button className={styles.register}>Присоединиться</button></Link>
            </div>
            <div className={styles.burgerMenu}>
                <div className={styles.burgerMenuHeader}><Link to={'general'} smooth={true}><img  className={styles.logo} width={90} height={90} src='assets/LOGO.png'/></Link>
                    <img onClick={openTabs} className={styles.burgerImg} src={tabsOpen ? 'assets/burgerClose.png' : 'assets/burger.png'}/></div>
                {tabsOpen ? <div className={styles.burgerTabs}>
                    {tabs.map((tab) => (
                        <Link offset={-130} to={tab.name} smooth={true}><p onClick={openTabs} key={tab.section}  className={styles.tags}>
                            {tab.section}
                        </p></Link>
                    ))}
                </div> : <div></div>}

            </div>

        </div>
    )
}