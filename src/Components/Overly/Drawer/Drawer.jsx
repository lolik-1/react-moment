import style from "./Drawer.module.scss"
import DrawerCard from "./DrawerContent/DrawerContent";
import Header from "./DrawerHeader/Header";

function Drawer () {
    return(
        <div  className={style.Overlay}>
            <div className={style.Drawer}>
                <div className={style.Container}>
                    <Header/>
                    <DrawerCard />
                    <div className={style.DrawerButton}>
                        <button className={style.Button} >Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer;