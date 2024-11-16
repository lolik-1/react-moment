import style from "./Drawer.module.scss"
import DrawerCard from "./DrawerContent/DrawerContent";
import Header from "./DrawerHeader/Header";

function Drawer ({ClickClose , isCard , isItemsDrawer}) {
    return(
        <div  className={style.Overlay}>
            <div className={style.Drawer}>
                <div className={style.Container}>
                    <Header ClickClose={ClickClose}/>
                    <DrawerCard isItemsDrawer={isItemsDrawer} isCard={isCard}/>
                    <div className={style.DrawerButton}>
                        <button className={style.Button} >Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer;