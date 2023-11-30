import styles from './style.scss'

export const Course = () => {
    return (
        <div className='course'>
            <p class='courseTitle'>Обучающий курс</p>
            <div className='courseInfo'>
                <div className='courseText'>
                    <p className='text1'>Обучим вашего ребенка новым технологиям!
                        Школа Тонкор проводит курсы, специально разработанные для вашего ребенка! </p>
                    <p className='text1'>У нас проводится обучение учеников полету на дронах с использованием как симулятора, так и реальных моделей. Также наши ученики получат знания об обслуживании, сборке и ремонте дрона.</p>
                    <p className='text1'>Занятия проводятся 3 раза в неделю группами от 4 до 8 человек.</p>
                    <p className='text1'>Не упустите шанс предоставить вашему ребенку возможность стать техническим гением!</p>
                </div>
                <img src='assets/item 34.png' />
            </div>
            <p className='courseFooter'>Записаться можно на <a className='href' href='tonkorag.ru/school'>tonkorag.ru/school</a></p>
        </div>
    )
}