import {useEffect, useState} from "react";
import axios from "axios";
import {BtnScrollUp} from "./Components/ScrollButton";
import {Header} from "./Components/Header";
import {General} from "./Components/General";
import styles from './App.module.scss'
import {Info} from "./Components/Info";
import {Calendar} from "./Components/Calendar";
import {Course} from "./Components/Course";
import {Form} from "./Components/Form";
import {Footer} from "./Components/Footer";
import {Register} from "./Components/Register";
import {Element} from 'react-scroll'


function App() {



    return (
        <div className={styles.root}>
            <div className={styles.container_header}>
                <Header/>
            </div>
            <div className={styles.container}>
                <General />
                <Info/>
            </div>
            <div className={styles.container2}>
                <Calendar/>
                <Course/>
            </div>
            <div className={styles.container3}>
                <Register/>
                <Form/>
                <Footer/>
            </div>
            <BtnScrollUp/>
        </div>

    )

}


export default App;
