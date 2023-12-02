import styles from './style.module.scss'

export const General = () => {
    return (
        <div className={styles.general}>
            <div className={styles.leftcontent}>
                <p className={styles.maintitle}>DRONE RACING</p>
                <p className={styles.subtitle}>kazan 2024</p>
                <p className={styles.generalText}>Взлетай выше, летай быстрее, вместе с Федерацией гонок дронов Республики
                    Татарстан!</p>
            </div>
            <button className={styles.register}>Присоединиться</button>
            <img src='assets/BOY.png'/>
        </div>
    )
}
