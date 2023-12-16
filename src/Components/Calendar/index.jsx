import styles from './style.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";

export const Calendar = () => {

    const [data, setData] = useState()

    const fetchData = async () => {
        const res = await axios.get('https://fdgrtcalendar.ru/')
        console.log(res)
        setData(res)
        }


    console.log(data)

    useEffect(() => {
        fetchData()
    }, [])

    // const data = [{
    //     "dateTime":"20 декабря",
    //     "summary": "Турнир дронов РТ"
    // },
    //     {
    //         "dateTime":"20 января",
    //         "summary": "Турнир дронов РТ"
    //     },
    //     {
    //         "dateTime":"20 февраля",
    //         "summary": "Турнир дронов РТ"
    //     },
    // ]


    return (
        <div className='calendar'>
            <div className={styles.root}>
            <span className={styles.calendarTitle}>Календарь
                мероприятий</span>
                <div loading={"lazy"} className={styles.ellipse1}  />
                <div loading={"lazy"} className={styles.ellipse2} />
                <div className={styles.calendarForm}>
                    {/*{data ? data.map((obj) => (*/}
                    {/*    <div key={obj.title} className={styles.event}>*/}
                    {/*        <div className={styles.eventText}>*/}
                    {/*            <p  className={styles.eventDate}>*/}
                    {/*                {obj.dateTime}*/}
                    {/*            </p>*/}
                    {/*            <p className={styles.eventName}>{obj.summary}</p>*/}
                    {/*        </div>*/}
                    {/*        <hr className={styles.hr}/>*/}
                    {/*    </div>*/}
                    {/*)) : <p>Мероприятий нет</p>}*/}


                </div>

            </div>
        </div>


    )
}