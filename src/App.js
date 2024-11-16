import React from "react";
import axios from "axios";



import Header from "./Components/Header";
import Filter from "./Components/Filter/Filter";
import Cards from "./Components/Card/Cards"





function App() {  
  
  const [isCard, setCard] = React.useState([])
  const [isItemsDrawer, setItemsDrawer] = React.useState([])
  const [isActiveCategory, setActiveCategory] =React.useState(0)

  React.useEffect(()=>{
    axios.get(`https://666485f2932baf9032ab58c8.mockapi.io/cart?${isActiveCategory > 0 ? `iden=${isActiveCategory}`:''}` ).then((res) =>{
      setCard(res.data)
    })

    axios.get('https://666485f2932baf9032ab58c8.mockapi.io/item').then((res) =>{
      setItemsDrawer(res.data)
    })

    },[isActiveCategory])


    const onAddtoCartitems = (obj) => {
      axios.get('https://666485f2932baf9032ab58c8.mockapi.io/item', obj);
      setItemsDrawer(prev=>[...prev, obj]);
    }


  return (
    <div className="Wraper">
      <div className="Container">
        <Header isCard={isCard} isItemsDrawer={isItemsDrawer} />
        <div className="Main">
          <div className="Main_con">
           <Filter isActiveCategory={isActiveCategory} onClickCategory={(i)=> setActiveCategory(i)}/>
           <div className="Box_cards">
              <div className="Box_cards_con">
                  {isCard.map((item, i) =>(
                      <Cards  
                      key={i}
                      isItemsDrawer={(obj)=>onAddtoCartitems(obj)} 
                      onAddtoCartitems={onAddtoCartitems} 
                      Title={item.Title} 
                      Img={item.Img} 
                      Price={item.Price}/>
                  ))}
              </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
