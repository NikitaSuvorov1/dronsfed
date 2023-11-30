import './App.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import  {BtnScrollUp} from "./Components/ScrollButton";
import {Header} from "./Components/Header";
import {General} from "./Components/General";
import styles from './App.scss'
import {Info} from "./Components/Info";
import {Calendar} from "./Components/Calendar";
import {Course} from "./Components/Course";
import {Form} from "./Components/Form";
import {Footer} from "./Components/Footer";
import {Register} from "./Components/Register";






function App() {


    return (
        <div className="App">
            <div className='container_header'><Header/></div>
            <div className='container'>
                <General/>
                <Info/>

            </div>
            <div className='container2'>
                <Calendar />
                <Course />
            </div>
            <div className='container3'>
                <Register />
                <Form />
                <Footer />
            </div>
            <BtnScrollUp/>
        </div>

    )

}


export default App;
