import './App.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import {Header} from "./Components/Header";
import {General} from "./Components/General";
import styles from './App.scss'
import {Info} from "./Components/Info";
import {Calendar} from "./Components/Calendar";
import {Course} from "./Components/Course";
import {Form} from "./Components/Form";


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
                <Form />
            </div>

        </div>

    )

}


export default App;
