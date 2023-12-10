import styles from './style.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";

export const Calendar = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        await axios.get('https://kevin12312312.pythonanywhere.com/events/').then(res => {
            setData(res.data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='calendar'>
            <div className={styles.root}>
            <span className={styles.calendarTitle}>Календарь
                мероприятий</span>
                <img loading={"lazy"} className={styles.ellipse1} src='/assets/Ellipse%208.png' />
                <img loading={"lazy"} className={styles.ellipse2} src='/assets/Ellipse%209.png' />
                <div className={styles.calendarForm}>
                    {data ? data.map((obj) => (
                        <div key={obj.title} className={styles.event}>
                            <div className={styles.eventText}>
                                <p  className={styles.eventDate}>
                                    {obj.dateTime}
                                </p>
                                <p className={styles.eventName}>{obj.summary}</p>
                            </div>
                            <hr className={styles.hr}/>
                        </div>
                    )) : <p>Мероприятий нет</p>}


                </div>

            </div>
        </div>


    )
}