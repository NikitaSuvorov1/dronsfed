import {Header} from "./Components/Header";
import {General} from "./Components/General";
import styles from './App.module.scss'
import {Info} from "./Components/Info";
import {Calendar} from "./Components/Calendar";
import {Course} from "./Components/Course";
import {Form} from "./Components/Form";
import {Footer} from "./Components/Footer";
import {Register} from "./Components/Register";
import ScrollToTopButton from "./Utils/ScrollToTopButton";
import {News} from "./Components/News";
import {Analytics} from "@vercel/analytics/react";


function App() {


    return (
        <div className={styles.root}>
            <Analytics />
            <div className={styles.container_header}>
                <Header/>
            </div>
            <ScrollToTopButton/>
            <div className='general'>
                <div className={styles.container}>
                    <General/>
                    <Info/>
                </div>
            </div>
            <div className={styles.container2}>
                <Calendar/>
                <Course/>
            </div>
            <div className={styles.container3}>
                <News/>
                <Register/>
                <Form/>
                <Footer/>
            </div>
        </div>

    )

}


export default App;
