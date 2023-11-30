import styles from './style.scss'

export const Card = ({title,text,imageURL,id}) => {

    return (
            <div className={id % 2 != 0 ? "card" : "alternativeCard"}>
                <div className='cardLeft'>
                    <p className='title'>{title}</p>
                    <p className='text'>{text}</p>
                </div>
                <img width={450} height={300} src={imageURL}/>
            </div>
    )
}