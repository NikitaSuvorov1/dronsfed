import styles from './style.module.scss'
import {Card} from "../Card";

export const Info = () => {

    const descriptions = [
        {
            "title": "Drone Racing",
            "text": "Инновационный и технологичный вид спорта, где спортсмены или команды соревнуются в скорости прохождения специальной трассы и совершенстве своих моделей квадрокоптеров.",
            "imageURL": "assets/item 1.png",
            "id":1
        },
        {
            "title": "Летать легко!",
            "text": "Для участия в соревнованиях нет возрастных ограничений, а мероприятия проходят как в реальном, так и в виртуальном пространстве.",
            "imageURL": "assets/item 2.png",
            "id":2
        },
        {
            "title": "Наша цель",
            "text": "Федерация нацелена на развитие и популяризацию гонок на дронах в Татарстане, создание школ пилотирования, разработку унифицированной программы обучения операторов БАС, открытию специализированных тренировочных площадок и проведению спортивных мероприятий в разных регионах страны",
            "imageURL": "assets/item 3.png",
            "id":3
        }
    ]

    return (
        <div className='info'>
            <div className={styles.info}>
                <div loading={"lazy"} className={styles.ellipse1}  />
            <span className={styles.titles}>
                    Готов ли ты окунуться в захватывающий мир скорости, адреналина и технологий?
                </span>
                <img loading={"lazy"} className={styles.dron1} src='/assets/drone-clipart-non-copyright-7%204.png' />

                <div loading={"lazy"} className={styles.ellipse2}   />
                <img loading={"lazy"} className={styles.dron2} src='/assets/drone-clipart-non-copyright-7%203.png' />
                <img loading={"lazy"} className={styles.dron3} src='/assets/drone-clipart-non-copyright-7%204.png' />
                {descriptions.map((obj) => (
                    <Card id={obj.id} title={obj.title} text={obj.text} imageURL={obj.imageURL} />
                ))}
                <p className={styles.infofooterText}>Присоединяйся к нам и открой для себя новую  гоночную эпоху в Республике Татарстан!</p>
            </div>
        </div>

    )
}
