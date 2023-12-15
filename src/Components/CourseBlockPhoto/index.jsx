import style from './style.module.scss'


export const CourseBlockPhoto = () => {
    return (
        <div className={style.root}>
            <div className={style.block}></div>
            <img src='/assets/coursePhoto.png' />
        </div>
    )
}