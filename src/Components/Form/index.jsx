import styles from './style.scss'
import {Dropdown} from "../Dropdown";
import { useForm } from "react-hook-form"
import axios from "axios";
export const Form = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
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
            <p className='formTitle'>Часто задаваемые вопросы</p>
            <div className='formContainer'>
                <p className='formText'>Выберите из придложенного</p>
                {tabs.map((obj) =>
                    <Dropdown title={obj.title} content={obj.description} />
                )}
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <p className='questions'>Остались вопросы?</p>
                    <input className='nameInput' {...register("firstName")} type={"text"} placeholder={"Имя"}/>
                    <input className='emailInput' type={"text"} {...register("email")} placeholder={"E-mail"}/>
                    <input className='textInput' type={"text"} {...register("message")} placeholder={"Ваше сообщение"}/>
                    <button className='submitButton'>Отправить</button>
                </form>
            </div>


        </>
    )
}