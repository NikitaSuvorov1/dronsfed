import React, { useState } from 'react';
import styles from './style.module.scss'
import {NewsCard} from "../NewsCard";
export const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const newsInfo = [
        {
            "id":0,
            "imgUrl": "/assets/newsImg1.png",
            "title":"Прошли первые соревнования по пилотированию дронов в РТ",
            "description": "Заняли достойное третее место!",
            "reference": "https://m.realnoevremya.ru/news/298493-tatarstanskie-sportsmeny-zanyali-prizovoe-mesto-na-sorevnovaniyah-po-dronam"
        },
        {
            "id":1,
            "imgUrl": "/assets/newsImg2.jpg",
            "title":"Кто возглавил дрон-движение в Татарстане?",
            "description": "Ее возглавил Георгий Дикопольский — основатель казанской IT-компании «Тонкор Аэро Групп», которая занимается сборкой гоночных дронов и БПЛА для бойцов СВО",
            "reference": "https://m.business-gazeta.ru/article/615637"
        }

    ];
    const goToPrevSlide = () => {
        const newIndex = (currentIndex - 1 + newsInfo.length) % newsInfo.length;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % newsInfo.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={styles.sliderContainer}>
            <img className={styles.slideImg} src='/assets/carouselLeft.png' onClick={goToPrevSlide} />
            <div className={styles.slideContainer}>
                {newsInfo.map((slide, index) => (
                    <div
                        key={index}
                        className={index === currentIndex ? styles.slideActive : styles.slide}
                    >
                        <NewsCard {...slide} />
                    </div>
                ))}
            </div>
            <img className={styles.slideImg} src='/assets/carouselRigth.png' onClick={goToNextSlide} />
        </div>
    );
};
