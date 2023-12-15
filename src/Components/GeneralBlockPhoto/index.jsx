import style from './styles.module.scss'


export const PhotoBlock = () => {
    return (
        <div className={style.root}>
            <div className={style.block}></div>
            <img src='/assets/boy1.png' />
        </div>
    )
}