import Card from "./DrawerCard/Card";
import style from "./DrawerContent.module.scss"

function DrawerContent ({isItemsDrawer}) {
    return(
        <div className={style.DrawerContent}>
            <div className={style.DrawerContent_con}>
               {isItemsDrawer.map((obj) =>(
                <Card Title={obj.Title} Price={obj.Price} Img={obj.Img} />
               ))}
            </div>
        </div>
    )
}

export default DrawerContent;