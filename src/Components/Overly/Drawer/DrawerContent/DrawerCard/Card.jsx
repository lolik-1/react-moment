import React from "react";

import AppContext from "../../../../../Context/AppContext";
import style from "./Card.module.scss"

function Card ({Img, Title, Price, id, }) {

  

const {onRemoveitems} = React.useContext(AppContext)
const obj = {id,Img, Title, Price}

const RemoveDrawer = () => {
    onRemoveitems(obj)
}


    return(
        <div className={style.Card}>
            <div className={style.Card_con}>
                <img className={style.img_card} width={110} height={110} src={Img} alt="Card"></img>
                <div className={style.Card_title}>
                    <p>{Title}</p>
                    <p className={style.Price}>{Price} руб.</p>
                </div>
                <button><img onClick={RemoveDrawer} width={20} height={20} src="./img/Close.png" alt="Close"></img></button>
            </div>
        </div>
    )
}

export default Card;