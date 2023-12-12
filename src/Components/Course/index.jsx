import styles from './style.module.scss'
import {lazy} from "react";
export const Course = () => {
    return (
        <div className='course'>
            <div className={styles.course}>
                <img loading={"lazy"} className={styles.ellipse1} src='/assets/Ellipse%2051.png' />
                <img loading={"lazy"} className={styles.ellipse2} src='/assets/Ellipse%206.png' />
                <img loading={"lazy"} className={styles.ellipse3} src='/assets/Ellipse%207.png' />
                <p className={styles.courseTitle}>Обучающий курс</p>
                <div className={styles.courseInfo}>
                    <div className={styles.courseText}>
                        <p className={styles.text1}>Обучим вашего ребенка новым технологиям!
                            Школа Тонкор проводит курсы, специально разработанные для вашего ребенка! </p>
                        <p className={styles.text1}>У нас проводится обучение  полету на дронах с использованием
                            как симулятора, так и реальных моделей. Также наши абитуриенты получат знания по обслуживанию,
                            сборке и ремонту дрона.</p>
                        <p className={styles.text1}>Занятия проводятся 3 раза в неделю группами от 4 до 8 человек.</p>
                        <p className={styles.text1}>Не упустите шанс предоставить вашему ребенку возможность стать
                            техническим гением!</p>
                    </div>
                    <img loading={"lazy"} src='assets/item 34.png'/>
                </div>
                <p className={styles.courseFooter}>Записаться можно на <a className={styles.href}
                                                                          href='https://tonkorag.ru/school'>tonkorag.ru/school</a>
                </p>
            </div>
        </div>

    )
}