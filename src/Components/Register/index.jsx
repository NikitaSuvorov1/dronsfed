import styles from './style.module.scss'
import {Dropdown} from "../Dropdown";
import {useForm} from "react-hook-form"
import axios from "axios";
import {useEffect, useState} from "react";
import {log} from "util";

export const Register = () => {

    const {
        register,
        handleSubmit,
        formState,
        formState: {isSubmitSuccessful},
        reset
    } = useForm({defaultValues: {"firstName": "", "surname": "", "emailOrTg": "","phone":""}})

    const onSubmit = (data) => {
        try {
            axios.post("https://fdgrtcalendar.ru/takepart/", data).then((res) => {
                alert("Заявка отправлена! Мы с вами свяжемся в ближайшее время.")
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ "emailOrTg": '', "firstName":"","surname":"","phone":"" });
        }
    }, [reset,isSubmitSuccessful,formState])

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
        <div className='register'>
            <div className={styles.form}>
                <p className={styles.formTitle}>Присоединяйся к нам!</p>
                <div className={styles.ellipse1}/>
                <div className={styles.ellipse2}/>
                <div className={styles.formContainer}>

                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <p className={styles.RegisterSubtitle}>Вступить в Федерацию гонок дронов
                            Республики Татарстан</p>
                        <input className={styles.nameInput} {...register("firstName")} type={"text"}
                               placeholder={"Имя"}/>
                        <input className={styles.nameInput} {...register("surname")} type={"text"}
                               placeholder={"Фамилия"}/>
                        <input className={styles.nameInput} type={"text"} {...register("emailOrTg")}
                               placeholder={"E-mail или Telegram"}/>
                        <input className={styles.nameInput} type={"text"} {...register("phone")}
                               placeholder={"Телефон"}/>
                        <button className={styles.submitButton}>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}