import React from 'react';
import Card from "./components/card";
import Header from "./components/header";
import Drawer from "./components/drawer";

import './App.scss';
import hero from './assets/img/hero-bg.jpg'
import search from './assets/img/search.svg'
import delet from './assets/img/product-remove.svg'



function App() {
   const [cartOpened, setCartOpened] = React.useState(false);
   const [items, setItems] = React.useState([]);
   const [cartItems, setCartItems] = React.useState([]);
   const [searchValue, setSearchValue] = React.useState('');

   React.useEffect(() => {
      fetch('https://65ceddcdbdb50d5e5f5a0f81.mockapi.io/items')
         .then(response => response.json())
         .then(json => setItems(json))
   }, [])

   const onAddToCart = (item) => {
      setCartItems(prev => prev.some(el => el.id === item.id) ? prev : [...prev, item]);
   }


   const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value);
   }

   return (
      <div className="App">

         <div className="wrapper">

            {cartOpened &&
               <Drawer
                  onClose={() => setCartOpened(false)}
                  items={cartItems}
               />
            }

            <Header
               onClickCart={() => setCartOpened(true)}
            />

            <main className="main">
               <div className="container">
                  <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
                     <div className="buy">
                        <div className="buy__inner">
                           <span className="buy__name">Stan Smith</span>
                           <span className="buy__name buy__name--black">Forever!</span>
                        </div>
                        <button className="buy__btn" type='button'>Купить</button>
                     </div>
                  </div>
                  <div className="sneakers">
                     <header className="sneakers__header">
                        <h2 className="sneakers__title">Все кроссовки</h2>
                        <label className="sneakers__search-label">
                           <input onChange={onChangeSearchInput} value={searchValue} className="sneakers__search" type="search" placeholder='Поиск...' style={{ backgroundImage: `url(${search})` }} />
                           {searchValue &&
                              <img
                                 onClick={() => setSearchValue('')}
                                 className="sneakers__search-img"
                                 src={delet}
                                 width={15}
                                 height={15}
                                 alt=""
                                 aria-hidden="true"
                                 aria-label="Очистить поле ввода"
                              />
                           }

                        </label>
                     </header>
                     <ul className="sneakers__grid">
                        {items
                        .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map(obj => (
                           <Card
                              key={obj.id}
                              id={obj.id}
                              title={obj.title}
                              price={obj.price}
                              imageUrl={obj.imageUrl}
                              onFavorite={() => console.log('Добавили в закладки')}
                              onPlus={(item) => onAddToCart(item)}
                           />
                        ))}
                     </ul>
                  </div>
               </div>
            </main>

         </div>

      </div>
   );
}

export default App;
