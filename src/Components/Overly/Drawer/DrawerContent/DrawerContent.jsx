import React from "react";
import Card from "./DrawerCard/Card";
import style from "./DrawerContent.module.scss"
import AppContext from "../../../../Context/AppContext";

function DrawerContent () {

    const {isItemsDrawer} = React.useContext(AppContext)
    return(
        <div className={style.DrawerContent}>
            <div className={style.DrawerContent_con}>
               {isItemsDrawer.map((obj) =>(
                <Card  Title={obj.Title} Price={obj.Price} Img={obj.Img} id={obj.id}/>
               ))}
            </div>
        </div>
    )
}

export default DrawerContent;