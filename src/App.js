import './App.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import {Header} from "./Components/Header";
import {General} from "./Components/General";
import styles from './App.scss'
import {Info} from "./Components/Info";
import {Calendar} from "./Components/Calendar";


function App() {


    return (
        <div className="App">
            <div className='container'>
                <Header/>
                <General/>
                <Info/>
            </div>
            <div className='container2'>
                <Calendar />
            </div>

        </div>

    )

}


export default App;
