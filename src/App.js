import React from "react";
import axios from "axios";
import {Route, Routes } from "react-router-dom";



import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Favorite from "./Pages/Favorite/Favorite";
import AppContext from "./Context/AppContext";



function App() {  

  /*Стейты*/
  const [isCard, setCard] = React.useState([])
  const [isItemsDrawer, setItemsDrawer] = React.useState([])
  const [isActiveCategory, setActiveCategory] = React.useState(0)
  const [isFavorite, setFavorite] = React.useState([])


  /*Ссылки на бэк*/
  let URLitem = 'https://666485f2932baf9032ab58c8.mockapi.io/item';
  let URLcart = `https://666485f2932baf9032ab58c8.mockapi.io/cart?${isActiveCategory > 0 ? `iden=${isActiveCategory}`:''}`
  let URLFavorite = 'https://9dc948808c314fdf.mokky.dev/favorite';

  /*Запросы на сервер*/
  React.useEffect(()=>{
    async function AxiosData () {

      const ResponsItem = await axios.get(URLitem);
      const ResponsCart = await axios.get(URLcart);
      const ResponsFavorite = await axios.get(URLFavorite)

      setItemsDrawer(ResponsItem.data)
      setFavorite(ResponsFavorite.data)
      setCard(ResponsCart.data)
      
    }
  
  AxiosData()

  },[isActiveCategory])


  
  /*Добавление данных в закладки */ 
  const onAddFavorite = (obj) =>{
    axios.post(URLFavorite,obj)
    setFavorite(prev=>[...prev, obj]);
  }


  /*Удаление данных из закладок ЕЩЕ НЕ ПОФИКСИЛ*/
  const Remove = (obj) => {
    axios.delete(`https://9dc948808c314fdf.mokky.dev/favorite/${obj.id}`)
    setFavorite((prev) => prev.filter(favorite => favorite.id !== obj.id))
  }
  

  /*Добавление данных в корзину */
  const onAddtoCartitems = (obj) => {
    axios.post(URLitem, obj);
    setItemsDrawer(prev=>[...prev, obj]);
  }

  /*Удаление данных из корзины ЕЩЕ НЕ ПОФИКСИЛ*/
  const onRemoveitems = (obj) => {
    axios.delete(`https://666485f2932baf9032ab58c8.mockapi.io/item/${obj.id}`);
    setItemsDrawer((prev) => prev.filter(item => item.id !== obj.id));
  }

  return (
    <AppContext.Provider 
    value={{
     onRemoveitems,
     setActiveCategory, 
     isActiveCategory, 
     onAddtoCartitems, 
     isCard, 
     isItemsDrawer,
     onAddFavorite,
     Remove,
     isFavorite
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
