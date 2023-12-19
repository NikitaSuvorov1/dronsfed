import style from './style.module.scss'
import {Slider} from "../NewsCarousel";

export const News = () => {
    return (
        <div className={style.root}>
            <h1>Новости</h1>
            <Slider />
        </div>
    )
}