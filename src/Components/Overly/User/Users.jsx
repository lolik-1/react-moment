import style from "./Users.module.scss"

function Users ({ClickCloseUser}) {
    return(
        <div className={style.Overlay}>
            <div className={style.Panel}>
                <div className={style.Panel_Container}>
                    <img onClick={ClickCloseUser} width={25} height={25} src="./img/Close.png"></img>
                    <div className={style.Panel_Header}>
                        <h1>Sign in Microchelik </h1>
                    </div>
                    <div className={style.Panel_Main}>
                        <input placeholder="Login" type="text" alt="input" value={""}></input>
                        <input placeholder="Password"  type="password" alt="input" value={""}></input>
                    </div>
                    <button>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Users;