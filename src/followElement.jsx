import React, { useState, useEffect } from 'react';

const FollowCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX + window.scrollX, y: e.clientY + window.scrollY });
        };

        const handleScroll = () => {
            // Обновляем координаты курсора при скролле
            // setPosition((prevPosition) => ({
            //     x: prevPosition.x + window.scrollX,
            //     y: prevPosition.y + window.scrollY,
            // }));
            // console.log(position)
        };

        window.addEventListener('mousemove', updateCursorPosition);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <img src='/assets/Aerial-drone-illustration-on-transparent-PNG.png'
                style={{
                    width: "50px",
                    height: "50px",
                    position: 'absolute',
                    top: position.y,
                    left: position.x,
                    transform: 'translate(-50%, -50%)', // Центрирование изображения относительно курсора
                    transition: 'transform 1s',
                    zIndex: "10"
                }}
            />
    );
};

export default FollowCursor;