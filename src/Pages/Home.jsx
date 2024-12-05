import React from "react";

import style from "./Home.module.scss"
import Cards from "../Components/Card/Cards";
import Filter from "../Components/Filter/Filter";
import AppContext from "../Context/AppContext";

function Home () {

    const {isCard} = React.useContext(AppContext)
    return(
        <div>
            <Filter/>
            <div className="Box_cards">
                <div className={style.Box_cards_con}>
                    {isCard.map((item, i,) =>(
                        <Cards  
                        key={i}
                        Title={item.Title} 
                        Img={item.Img} 
                        Price={item.Price}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;