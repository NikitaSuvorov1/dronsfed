import styles from './style.scss'
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
        <div className='calendar'>
            <span className='calendarTitle'>Календарь
                мероприятий</span>
            <div className='calendarForm'>
                {data ? data.map((obj) => (
                    <div className='event'>
                        <div className='eventText'>
                            <p className='eventDate'>
                                {obj.dateTime}
                            </p>
                            <p className='eventName'>{obj.summary}</p>
                        </div>
                        <hr className='hr'/>
                    </div>
                )) : <p>Мероприятий нет</p>}



            </div>

        </div>

    )
}