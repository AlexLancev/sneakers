import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import basket from "../../assets/img/basket.svg";
import favoritesHart from "../../assets/img/favorites-hart.svg";
import user from "../../assets/img/user.svg";

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/">
            <img
              className="logo"
              width={245}
              height={41}
              src={logo}
              alt="Логотип компании React Sneakers"
            />
          </Link>
          <div className="navigation-bar">
            <button
              onClick={props.onClickCart}
              className="basket-btn"
              type="button"
              style={{ backgroundImage: `url(${basket})` }}
            >
              <span className="basket-btn__currency">0</span>
              <span className="basket-btn__currency"> руб.</span>
            </button>
            <Link to="/favorites">
              <button
                className="basket-btn favorites"
                type="button"
                style={{ backgroundImage: `url(${favoritesHart})` }}
              >
                Закладки
              </button>
            </Link>
            <Link to="/user">
              <button
                className="basket-btn user"
                type="button"
                style={{ backgroundImage: `url(${user})` }}
              >
                Профиль
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;