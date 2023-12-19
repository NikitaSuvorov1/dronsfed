import styles from './style.module.scss'


export  const NewsCard = ({imgUrl,title,reference,description}) => {
    return (
        <div className={styles.root}>
            <img src={imgUrl} />
            <div className={styles.newsText}>
                <span>{title}</span>
                <p>{description}</p>
                <a href={reference}>Подробнее....</a>
            </div>

        </div>
    )
}