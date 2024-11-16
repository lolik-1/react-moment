import React from "react";

import style from "./Header.module.scss"
import Drawer from "./Overly/Drawer/Drawer";
import Users from "./Overly/User/Users";

function Header ({isCard , isItemsDrawer}){

  const [isOpen, setOpen] =React.useState(false)
  const [isOpenUser, setOpenUser] =React.useState(false)


    return(
        <div className={style.Header}>
          {isOpen ? <Drawer isItemsDrawer={isItemsDrawer} isCard={isCard} ClickClose={()=>setOpen(false)}/> : null}
          {isOpenUser? <Users ClickCloseUser={()=>setOpenUser(false)}/> : null}
          <div className={style.Header_con}>
            <div className={style.Left_side}>
              <img width={70} height={70} className={style.Logo} src="./img/img1.jpg"></img>
              <p className={style.Title}>Microchelik</p>
            </div>
            <div className={style.Right_side}>
              <img onClick={() => setOpenUser(true)} width={35} height={35} src="./img/user.png" alt="Drawer"></img>
              <img onClick={() => setOpen(true)} width={35} height={35} src="./img/bas.png" alt="User"></img>
              <img onClick={() => setOpen(true)}width={35} height={35} src="./img/2.png" alt="Like"></img>
            </div>
          </div>
        </div>
    )
}

export default Header;

