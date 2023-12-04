import styles from './style.module.scss'
import {Dropdown} from "../Dropdown";
import { useForm } from "react-hook-form"
import axios from "axios";
export const Form = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        try {
            axios.post('http://kevin12312312.pythonanywhere.com/faq/',data).then((res) => {
                console.log(res)
            })
        } catch (error)  {
            console.log(error)
        }



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
        <div className={styles.root}>
            <p className={styles.formTitle}>Часто задаваемые вопросы</p>
            <div className={styles.formContainer}>
                <p className={styles.formText}>Выберите из придложенного</p>
                {tabs.map((obj) =>
                    <Dropdown title={obj.title} content={obj.description} />
                )}
                <form onSubmit={handleSubmit(onSubmit)}   className={styles.form}>
                    <p className={styles.questions}>Остались вопросы?</p>
                    <input className={styles.nameInput} {...register("firstName")} type={"text"} placeholder={"Имя"}/>
                    <input className={styles.emailInput} type={"text"} {...register("email")} placeholder={"E-mail"}/>
                    <textarea className={styles.textInput} type={"text"} {...register("message")}  placeholder={"Ваше сообщение"}/>
                    <button className={styles.submitButton}>Отправить</button>
                </form>
            </div>


        </div>
    )
}