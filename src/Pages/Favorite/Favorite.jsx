import React from "react"

import style from "./Favorite.module.scss"
import AppContext from "../../Context/AppContext";
import CardFavorite   from "../../Components/Card/CardFav/CardFavorite";




function Favorite () {

    const {isFavorite} = React.useContext(AppContext)

    return(
        <AppContext.Provider value={{isFavorite}}>
            <h1 className={style.Title}>Закладки</h1>
            <div className={style.Container}>
                <div className={style.Container_con}>
                    {isFavorite.map((item , id) =>(
                            <CardFavorite  
                                id={id}
                                {...item}
                            />
                        ))}
                </div>    
            </div>
        </AppContext.Provider>
    )
}

export default Favorite;