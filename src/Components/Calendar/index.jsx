import styles from './style.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";

export const Calendar = () => {

    const [data, setData] = useState()

    const fetchData = async () => {
        const {data} = await axios.get('https://fdgrtcalendar.ru/events/')
        console.log(data)
        setData(data)
        }



    useEffect(() => {
        fetchData()
    }, [])




    return (
        <div className='calendar'>
            <div className={styles.root}>
            <span className={styles.calendarTitle}>Календарь
                мероприятий</span>
                <div  className={styles.ellipse1}  />
                <div  className={styles.ellipse2} />
                <div className={styles.calendarForm}>
                    {data ? data?.map((obj) => (
                        <div key={obj.title}>
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