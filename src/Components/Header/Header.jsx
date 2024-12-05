import React from "react";
import { Link } from "react-router-dom";

import style from "./Header.module.scss"
import Drawer from "../Overly/Drawer/Drawer";
import Users from "../Overly/User/Users";
import HeaderContext from "../../Context/HeaderContext";

function Header (){

  const [isOpen, setOpen] =React.useState(false)
  const [isOpenUser, setOpenUser] =React.useState(false)


  const ClickClose = () => {
    setOpen(false)
  }
  
  const ClickOpen = () => {
    setOpen(true)
  }

  
  const ClickCloseUserName = () =>{ 
    setOpenUser(false)
  }

  const ClickOpenUserName = () =>{
    setOpenUser(true)
  }
  

    return(
      <HeaderContext.Provider value={{ClickClose, ClickCloseUserName}}>
        <div className={style.Header}>
          {isOpen ? <Drawer/> : null}
          {isOpenUser? <Users/> : null}
          <div className={style.Header_con}>
            <div className={style.Left_side}>
              <Link to="/"><img width={70} height={70} className={style.Logo} src="./img/img1.jpg" alt="Logo"></img></Link>
              <p className={style.Title}>Microchelik</p>
            </div>
            <div className={style.Right_side}>
              <img onClick={ClickOpenUserName} width={35} height={35} src="./img/user.png" alt="Drawer"></img>
              <img onClick={ClickOpen} width={35} height={35} src="./img/bas.png" alt="User"></img>
              <Link to="/Favorite"><img width={35} height={35} src="./img/2.png" alt="Like"></img></Link>
            </div>
          </div>
        </div>
      </HeaderContext.Provider>  
    )
}

export default Header;

