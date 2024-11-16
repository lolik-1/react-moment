import style from "./Card.module.scss"

function Card ({Img, Title, Price}) {
    return(
        <div className={style.Card}>
            <div className={style.Card_con}>
                <img className={style.img_card} width={110} height={110} src={Img}></img>
                <div className={style.Card_title}>
                    <p>{Title}</p>
                    <p className={style.Price}>{Price} руб.</p>
                </div>
                <button><img width={20} height={20} src="./img/Close.png"></img></button>
            </div>
        </div>
    )
}

export default Card;