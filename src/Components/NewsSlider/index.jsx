import React, { useState } from 'react';

export const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = ['/assets/boy1.png','/assets/mainlogo.png','/assets/burger.png']

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    }

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }

    return (
        <div className="slider">
            <img src={images[currentIndex]} width={100} height={100} alt={'image' + currentIndex} className="slide" />
            <button onClick={prevSlide} className="prev-btn">Previous</button>
            <button onClick={nextSlide} className="next-btn">Next</button>
        </div>
    );
}

export default Slider;