import React, { Fragment } from "react";
import Card from "../card";

function Favorites({ items, onAddToFavorite }) {
  return (
    <Fragment>
      <div className="sneakers">
        <header className="sneakers__header">
          <h2 className="sneakers__title">Мои закладки</h2>
        </header>
        <ul className="sneakers__grid">
          {items.map((obj) => (
            <Card
              key={obj.id}
              id={obj.id}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              favorited
              onFavorite={onAddToFavorite}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Favorites;
