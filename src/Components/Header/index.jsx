import styles from './style.module.scss'
import {Link} from "react-scroll";

export const Header = () => {




    const tabs = [{"section": 'Календарь', "name": "calendar"},
        {"section": 'Курсы', "name": "course"},
        {"section": 'О нас', "name": 'info'},
            {"section":"Контанты","name":'footer'}
    ]



    return (
        <div className={styles.root}>
            <div className={styles.root}>
                <Link to={'course'} smooth={true}><img  style={{cursor: "pointer"}} width={90} height={90} src='assets/LOGO.png'/></Link>
                <div className={styles.tabs}>
                    {tabs.map((tab) => (
                        <Link offset={-130} to={tab.name} smooth={true}><p key={tab.section}  className={styles.tags}>
                            {tab.section}
                        </p></Link>
                    ))}

                </div>
                <Link to={'register'} offset={-20} smooth={true}><button className={styles.register}>Присоединиться</button></Link>
            </div>
        </div>
    )
}