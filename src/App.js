import React from "react";
import axios from "axios";
import {Route, Routes } from "react-router-dom";



import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import AppContext from "./Context/AppContext";



function App() {  

  /*Стейты*/
  const [isCard, setCard] = React.useState([])
  const [isItemsDrawer, setItemsDrawer] = React.useState([])
  const [isActiveCategory, setActiveCategory] =React.useState(0)

  /*Ссылки на бэк*/
  let URLitem = 'https://666485f2932baf9032ab58c8.mockapi.io/item';
  let URLcart = `https://666485f2932baf9032ab58c8.mockapi.io/cart?${isActiveCategory > 0 ? `iden=${isActiveCategory}`:''}`

  /*Запросы на сервер*/
  React.useEffect(()=>{
    async function AxiosData () {

      const ResponsItem = await axios.get(URLitem);
      const ResponsCart = await axios.get(URLcart);

      setItemsDrawer(ResponsItem.data)
      setCard(ResponsCart.data)
    }
  
  AxiosData()

  },[isActiveCategory])
 
  /*Добавление данных в корзину */
  const onAddtoCartitems = (obj) => {
    axios.post(URLitem, obj);
    setItemsDrawer(prev=>[...prev, obj]);
  }

  /*Удаление данных из корзины ЕЩЕ НЕ ПОФИКСИЛ*/
  const onRemoveitems = (id) => {
    axios.delete(`https://666485f2932baf9032ab58c8.mockapi.io/item/${id}`);
    setItemsDrawer((prev)=> prev.filter(item => item.id !== id));
    console.log(id)
  }

  return (
    <AppContext.Provider 
    value={{
     onRemoveitems,
     setActiveCategory, 
     isActiveCategory, 
     onAddtoCartitems, 
     isCard, 
     isItemsDrawer
     }}>

    <div className="Wraper">
      <div className="Container">
        <Header/>
        <div className="Main">
          <div className="Main_con">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Favorite" element={<Favorite/>}/>
          </Routes>
          </div>
        </div>
      </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;
