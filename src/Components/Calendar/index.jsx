import styles from './style.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";

export const Calendar = () => {

    const [data, setData] = useState([])

    // const fetchData = async () => {
    //     await axios.get('https://kevin12312312.pythonanywhere.com/events/').then(res => {
    //         setData(res.data)
    //     })
    // }
    //
    // useEffect(() => {
    //     fetchData()
    // }, [])

    console.log(data)

    return (
        <div className={styles.root}>
            <span className={styles.calendarTitle}>Календарь
                мероприятий</span>
            <div className={styles.calendarForm}>
                {data ? data.map((obj) => (
                    <div className={styles.event}>
                        <div className={styles.eventText}>
                            <p className={styles.eventDate}>
                                {obj.dateTime}
                            </p>
                            <p className={styles.eventName}>{obj.summary}</p>
                        </div>
                        <hr className={styles.hr}/>
                    </div>
                )) : <p>Мероприятий нет</p>}



            </div>

        </div>

    )
}