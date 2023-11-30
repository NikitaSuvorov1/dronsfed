import styles from './style.scss'
import {Dropdown} from "../Dropdown";
import { useForm } from "react-hook-form"
import axios from "axios";
import {useState} from "react";
export const Register = () => {

    const { register, handleSubmit } = useForm()
    const [userData,setUserData] = useState({})
    const onSubmit = (data) => {
        setUserData(data)
        axios.post('http://kevin12312312.pythonanywhere.com/faq/',data)
    }

    const tabs = [
        {
            id: 0,
            title: "Что дает членство в федерации?",
            description:
                "Возможность участия в соревнованиях, упрощенное участие в международных соревнованиях, новые знакомства.",
        },
        {
            id: 1,
            title: "Как вступить в вашу Федерацию?",
            description:
                "Оставьте заявку на нашем сайте и в течении 3 дней мы ответим вам на почту.",
        },
        {
            id: 2,
            title: "Нужно ли уметь управлять дроном?",
            description:
                "Навык управления дроном не обязателен. В нашей Федерации есть множество направлений, в которых вы можете принять участие.",
        },
        {
            id: 3,
            title: "Какие обязанности у членов федерации?",
            description:
                "Ежемесячный взнос.",
        },
        {
            id: 4,
            title: "Есть ли ограничение по возрасту для вступления в Федерацию?",
            description:
                "Присоединиться к нам может любой желающий гражданин Российской Федерации, достигший 14-летнего возраста.",
        },
    ];

    return (
        <>
            <p className='formTitle'>Присоединяйся к нам!</p>
            <div className='formContainer'>

                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <p className='RegisterSubtitle'>Вступить в Федерацию гонок дронов
                        Республики Татарстан</p>
                    <p className='questions'>Ваше ФИО</p>
                    <input className='nameInput' {...register("firstName")} type={"text"} placeholder={"Имя"}/>
                    <input className='nameInput' {...register("surName")} type={"text"} placeholder={"Фамилия"}/>
                    <input className='nameInput' {...register("lastName")} type={"text"} placeholder={"Отчество"}/>
                    <p className='questions'>Email и телефон</p>
                    <input className='nameInput' type={"text"} {...register("email")} placeholder={"E-mail"}/>
                    <input className='nameInput' type={"text"} {...register("phone")} placeholder={"Телефон"}/>
                    <button className='submitButton'>Отправить</button>
                </form>
            </div>


        </>
    )
}