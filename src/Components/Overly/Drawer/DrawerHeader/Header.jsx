import style from "./Header.module.scss"

function Header ({ClickClose}) {
    return(
        <div className={style.Header_Drawer}>
            <div className={style.Filter}>
                <p>Коризна</p>
                <p>Понравилось</p>
            </div>
            <img onClick={ClickClose}  width={25} height={25} src="./img/Close.png" alt="Close"></img>
        </div>
)
}

export default Header;