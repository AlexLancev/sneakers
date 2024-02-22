import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";

function Card({
  id,
  title,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  favorited = false,
  isLoading,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(!favorited);

  function onClickPlus() {
    onPlus({ id, title, price, imageUrl });
    setIsAdded(!isAdded);
  }

  function onClickFavorite() {
    onFavorite({ id, title, price, imageUrl, favorited });
    setIsFavorite(!isFavorite);
  }

  return (
    <Fragment>
      {isLoading ? 
        <Fragment>
          <ContentLoader
            speed={2}
            width={210}
            height={265}
            viewBox="0 0 210 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
            <rect x="0" y="137" rx="0" ry="0" width="110" height="15" />
            <rect x="0" y="161" rx="0" ry="0" width="90" height="20" />
            <rect x="125" y="161" rx="0" ry="0" width="20" height="20" />
            <rect x="0" y="114" rx="0" ry="0" width="150" height="15" />
          </ContentLoader>
        </Fragment>
       : 
        <Fragment>
          <li className="sneakers__product">
            <button className="sneakers__favorites-btn" type="button">
              <img
                title={!isFavorite ? "Удалить из закладок" : ""}
                onClick={onClickFavorite}
                className="sneakers__favorites"
                width={32}
                height={32}
                src={
                  isFavorite ? "/img/favorites.svg" : "/img/favorites-add.svg"
                }
                alt=""
                aria-hidden="true"
              />
            </button>
            <img
              className="sneakers__img"
              width={133}
              height={112}
              src={imageUrl}
              alt={title}
            />
            <h3 className="sneakers__name">{title}</h3>
            <div className="sneakers__row-price">
              <div className="sneakers__cell-price">
                <span className="sneakers__price">Цена:</span>
                <b className="sneakers__sum">{price} руб.</b>
              </div>
              <button className="sneakers__add" type="button">
                <img
                  title={!isAdded ? "Добавить в корзину" : "Удалить из корзины"}
                  className="sneakers__add-img"
                  width={32}
                  height={32}
                  onClick={onClickPlus}
                  src={
                    isAdded ? "/img/checked-green.svg" : "/img/product-add.svg"
                  }
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </div>
          </li>
        </Fragment>
      }
    </Fragment>
  );
}

export default Card;
