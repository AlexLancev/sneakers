import React, { Fragment } from "react";
import Card from "../card";

import hero from "../../assets/img/hero-bg.jpg";
import search from "../../assets/img/search.svg";
import delet from "../../assets/img/product-remove.svg";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorite,
  isLoading,
}) {

  const renderItems = () => {

    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filtredItems).map((obj, index) => (
      <Card
        key={index}
        // id={obj.id}
        // title={obj.title}
        // price={obj.price}
        // imageUrl={obj.imageUrl}
        onFavorite={(item) => onAddToFavorite(item)}
        onPlus={(item) => onAddToCart(item)}
        isLoading={isLoading}
        {...obj}
      />
    ));

  };
  
  return (
    <Fragment>
      <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="buy">
          <div className="buy__inner">
            <span className="buy__name">Stan Smith</span>
            <span className="buy__name buy__name--black">Forever!</span>
          </div>
          <button className="buy__btn" type="button">
            Купить
          </button>
        </div>
      </div>
      <div className="sneakers">
        <header className="sneakers__header">
          <h2 className="sneakers__title">Все кроссовки</h2>
          <label className="sneakers__search-label">
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              className="sneakers__search"
              type="search"
              placeholder="Поиск..."
              style={{ backgroundImage: `url(${search})` }}
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="sneakers__search-img"
                src={delet}
                width={15}
                height={15}
                alt=""
                aria-hidden="true"
                aria-label="Очистить поле ввода"
              />
            )}
          </label>
        </header>
        <ul className="sneakers__grid">{renderItems()}</ul>
      </div>
    </Fragment>
  );
}

export default Home;
