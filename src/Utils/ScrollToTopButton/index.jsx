import React, { useState, useEffect } from 'react';
import './style.scss';
import {Link} from "react-scroll";
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };



    return (
        <div>
            <Link smooth={true} to={'general'}>
                <img loading={"lazy"} src='/assets/toTopBtn.png' className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} >
                </img>
            </Link>
        </div>

    );
};

export default ScrollToTopButton;