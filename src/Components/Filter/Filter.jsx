import React from "react";
import style from "./Filter.module.scss"


function Filter ({isActiveCategory, onClickCategory}) {

   

    const filter = ["All","Nike","Puma", "Adidas"]

    return(
        <div className="Fileter">
            <ul className={style.Fileter_con}>
                {filter.map((value,i) =>(
                    <li
                    key={i}
                    onClick={()=>onClickCategory(i)}
                    className={isActiveCategory === i ? "active": ''}
                    >{value}</li>
                ))}
            </ul>
        </div>
    )
}

export default Filter;