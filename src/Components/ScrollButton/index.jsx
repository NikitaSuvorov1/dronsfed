import styles from './style.scss'
export const BtnScrollUp = () => {

    const handlerScrollUp = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            console.log(document.body.scrollTop)
            window.scrollBy(0, -50);
            setTimeout(handlerScrollUp, 10);
        }
    }


    return (
        <div className='scrollButton'>
            <div onClick={handlerScrollUp}>button</div>
        </div>
    );
}