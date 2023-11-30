import {useState} from "react";
import styles from './style.scss'

export const Dropdown = ({title, content}) => {

    const [activeId, setActiveId] = useState(false);

    const openTab = () => {
        setActiveId(!activeId)
    }

    return (
        <div className={`tab ${activeId ? "active" : "null"}`}>
            <div className='question'><input id="tab-one" type='' name="tabs"/>
                <label onClick={openTab}>
                    {title}
                </label>
                <img className='plus' src='assets/plyus_2c2dum2oaa6c_64 1.png'/></div>

            <div className="tab-content">
                <p>{content}</p>

            </div>
        </div>
    );
}

