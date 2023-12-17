import styles from './style.module.scss'
import {Dropdown} from "../Dropdown";
import { useForm } from "react-hook-form"
import axios from "axios";
import {useEffect} from "react";
export const Form = () => {

    const {
        register,
        handleSubmit,
        formState,
        formState: {isSubmitSuccessful},
        reset
    } = useForm({defaultValues: {"firstName": "", "message": "", "emailOrTg": ""}})

    const onSubmit = (data) => {
        try {
            axios.post("https://fdgrtcalendar.ru/faq/", data).then((res) => {
                alert("Спасибо за ваш вопрос!В ближайшие 3 дня обратная связь придет на вашу почту или телеграм!")
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ "emailOrTg": '', "firstName":"","message":"" });
        }
    }, [reset,isSubmitSuccessful,formState])




    const tabs = [
        {
            id: 0,
            title: "Что дает членство в федерации?",
            description:
                "Возможность стать членом сборной команды от Республики Татарстан, участие в международных соревнованиях, новые знакомства.",
        },
        {
            id: 1,
            title: "Как вступить в вашу Федерацию?",
            description:
                "Оставьте заявку на нашем сайте и в течении 3 дней мы ответим вам на почту или свяжемся с вами по телефону.",
        },
        {
            id: 2,
            title: "Нужно ли уметь управлять дроном?",
            description:
                "Навык управления дроном не обязателен. Федерация предоставляет уникальные возможности как для новичков, желающих освоить пилотирование и сборку квадрокоптеров, так и для опытных пилотов, стремящихся улучшить свое мастерство.",
        },
        {
            id: 3,
            title: "Какие обязанности у членов федерации?",
            description:
                "Развивать федерацию и популяризировать гонки на дронах :)",
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
            <div className={styles.ellipse1} />
            <div className={styles.ellipse2} />
            <div className={styles.formContainer}>
                <p className={styles.formText}>Выберите из предложенного</p>
                {tabs.map((obj) =>
                    <Dropdown title={obj.title} content={obj.description} />
                )}
                <form onSubmit={handleSubmit(onSubmit)}  className={styles.form}>
                    <p className={styles.questions}>Остались вопросы?</p>
                    <input className={styles.nameInput} {...register("firstName")} type={"text"} placeholder={"Имя"}/>
                    <input className={styles.emailInput} type={"text"} {...register("emailOrTg")} placeholder={"E-mail или Telegram"}/>
                    <textarea className={styles.textInput} type={"text"} {...register("message")}  placeholder={"Ваше сообщение"}/>
                    <button className={styles.submitButton}>Отправить</button>
                </form>
            </div>


        </div>
    )
}