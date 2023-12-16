import {Slider} from "../NewsSlider";
import style from './style.module.scss'

export const News = () => {
    return (
        <div className={style.root}>
            <span>Новости</span>
            <Slider />
        </div>
    )
}