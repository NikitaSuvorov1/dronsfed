import styles from './style.module.scss'

export const Card = ({title,text,imageURL,id}) => {

    return (
            <div className={id % 2 != 0 ? styles.card : styles.alternativeCard}>
                <div className={styles.cardLeft}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.text}>{text}</p>
                </div>
                <img width={450} height={300} src={imageURL}/>
            </div>
    )
}