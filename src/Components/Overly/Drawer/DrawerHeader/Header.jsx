import React from "react";


import style from "./Header.module.scss"
import HeaderContext from "../../../../Context/HeaderContext";


function Header () {

    const {ClickClose} = React.useContext(HeaderContext)

    return(
        <div className={style.Header_Drawer}>
            <div className={style.Filter}>
                <p>Коризна</p>
            </div>
            <img onClick={()=>ClickClose()}  width={25} height={25} src="./img/Close.png" alt="Close"></img>
        </div>
)
}

export default Header;