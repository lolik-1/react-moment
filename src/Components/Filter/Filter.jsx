import React from "react";


import style from "./Filter.module.scss"
import AppContext from "../../Context/AppContext";


function Filter () {

    const {setActiveCategory, isActiveCategory} = React.useContext (AppContext)

    const filter = ["All","Nike","Puma", "Adidas"]

    return(
        <div className="Fileter">
            <ul className={style.Fileter_con}>
                {filter.map((value,i) =>(
                    <li
                    key={i}
                    onClick={()=>setActiveCategory(i)}
                    className={isActiveCategory === i ? "active": ''}
                    >{value}</li>
                ))}
            </ul>
        </div>
    )
}

export default Filter;