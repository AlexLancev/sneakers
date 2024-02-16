import React from 'react';
import Card from "./components/card";
import Header from "./components/header";
import Drawer from "./components/drawer";

import './App.scss';
import hero from './assets/img/hero-bg.jpg'
import search from './assets/img/search.svg'

function App() {
   const [cartOpened, setCartOpened] = React.useState(false);
   const [items, setItems] = React.useState([]);

   return (
      <div className="App">

         <div className="wrapper">

            {cartOpened && <Drawer onCloseCart={() => setCartOpened(false)} />}

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
                        <input className="sneakers__search" type="search" placeholder='Поиск...' style={{ backgroundImage: `url(${search})` }} />
                     </header>
                     <ul className="sneakers__grid">
                        {items.map(obj => (
                           <Card
                              title={obj.title}
                              price={obj.price}
                              imageUrl={obj.imageUrl}
                              onFavorite={() => console.log('Добавили в закладки')}
                              onPlus={() => console.log('Нажали плюс')}
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
