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

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // };

    return (
        <div>
            <Link smooth={true} to={'general'}>
                <img src='/assets/toTopBtn.png' className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} >
                    {/*<i className="fa fa-arrow-up"/>*/}
                </img>
            </Link>
        </div>

    );
};

export default ScrollToTopButton;