import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./components/pages/home";
import Favorites from "./components/pages/favorites";
import Header from "./components/header";
import Drawer from "./components/drawer";

import "./App.scss";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false); // Состояние для открытия и закрытия корзины
  const [items, setItems] = React.useState([]); // Состояние для списка товаров
  const [cartItems, setCartItems] = React.useState([]); // Состояние для товаров в корзине
  const [searchValue, setSearchValue] = React.useState(""); // Состояние для поискового запроса
  const [favorites, setFavorites] = React.useState([]); // Состояние для товаров в избранном
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      // Запросы к API для получения данных о корзине, избранном и товарах
      const cartResponse = await axios.get(
        "https://65ceddcdbdb50d5e5f5a0f81.mockapi.io/cart"
      );
      const favoritesResponse = await axios.get(
        "https://65d2e0f5522627d5010787f9.mockapi.io/favorites"
      );
      const itemsResponse = await axios.get(
        "https://65ceddcdbdb50d5e5f5a0f81.mockapi.io/items"
      );

      // Заполнение соответствующих состояний полученными данными
      
      setIsLoading(false);

      // Корзина
      setCartItems(cartResponse.data);

      // Закладки
      setFavorites(favoritesResponse.data);

      // Список товаров при загрузке страницы
      setItems(itemsResponse.data);

    }
    fetchData(); // Вызов функции получения данных при загрузке компонента
  }, []);

  const onAddToCart = (item) => {
    // Добавление товара в корзину через API и обновление списка товаров в корзине
    axios.post("https://65ceddcdbdb50d5e5f5a0f81.mockapi.io/cart", item);
    setCartItems((prev) =>
      prev.some((el) => el.id === item.id) ? prev : [...prev, item]
    );
    console.log(item);
  };

  const onAddToFavorite = async (retObj) => {
    try {
      if (favorites.find((el) => Number(el.id) === Number(retObj.id))) {
        axios.delete(
          `https://65d2e0f5522627d5010787f9.mockapi.io/favorites/${retObj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://65d2e0f5522627d5010787f9.mockapi.io/favorites",
          retObj
        );
        setFavorites((prev) =>
          prev.some((el) => el.id === retObj.id) ? prev : [...prev, data]
        );
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://65ceddcdbdb50d5e5f5a0f81.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="wrapper">
        {cartOpened && (
          <Drawer
            onClose={() => setCartOpened(false)}
            items={cartItems}
            onRemove={onRemoveItem}
          />
        )}

        <Header onClickCart={() => setCartOpened(true)} />

        <main className="main">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    items={items}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                    isLoading={isLoading}
                  />
                }
              />
            </Routes>

            <Routes>
              <Route
                path="/favorites"
                element={
                  <Favorites
                    items={favorites}
                    onAddToFavorite={onAddToFavorite}
                  />
                }
              />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
