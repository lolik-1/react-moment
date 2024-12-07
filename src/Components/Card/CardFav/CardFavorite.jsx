import React from "react";

import style from "./CardFavorite.module.scss"
import AppContext from "../../../Context/AppContext";

function Cards ({Title,Img,Price,id}) {

    const {Remove} = React.useContext(AppContext)


    const [isFollow, setFollow] =React.useState(false)

    const isFollowCheck = () =>{
        Remove((id,Title,Img,Price))
        setFollow(!isFollow)
    
    }
    

    return(
        <div className={style.Card}>
            <div className={style.Card_con}>
                <img width={150} height={150} src={Img}></img>
                <p className={style.Title}>{Title}</p>
                <div className={style.Card_bottom}>
                    <div className={style.Card_Price}>
                        <p className={style.Price_title}>Цена:</p>
                        <p className={style.Price}>{Price} руб.</p>
                    </div>
                    <div className={style.Card_button}>
                        <button><img onClick={isFollowCheck} width={30} height={30} src={isFollow ? "./img/2.png":"./img/1.png"}></img></button>
                    </div>
                </div>
            </div>
        </div>
)
}

export default Cards;