import React, { Fragment } from "react";

import productRemove from "../../assets/img/product-remove.svg";
import box from "../../assets/img/box.png";
import checkedList from "../../assets/img/checked-list.png";

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <aside className="basket basket-status">
      <div className="basket-status__inner">
        <button
          onClick={onClose}
          className="basket-status__close-btn"
          type="button"
          aria-label="Закрыть корзину"
        >
          <img
            className="basket-status__close-img"
            src={productRemove}
            alt=""
            aria-hidden="true"
          />
        </button>
        <h2 className="basket__title">Корзина</h2>

        {items.length ? (
          <Fragment>
            <div className="basket__buy">
              <ul className="basket__list">
                {items.map((el, index) => (
                  <li className="basket__item" key={el.id || index}>
                    <div className="basket__inner">
                      <img
                        className="basket__img"
                        width={70}
                        height={70}
                        src={el.imageUrl}
                        alt={el.title}
                      />
                      <div className="basket__card">
                        <h3 className="basket__name">{el.title}</h3>
                        <b className="basket__sum">{el.price} руб.</b>
                      </div>
                    </div>
                    <button className="basket__delete" type="button">
                      <img
                        onClick={() => onRemove(el.id)}
                        className="basket__delete-img"
                        src={productRemove}
                        alt=""
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="decor">
                <ul className="decor__list">
                  <li className="decor__item">
                    <span className="decor__name">Итого:</span>
                    <b className="decor__sum">21 498 руб.</b>
                  </li>
                  <li className="decor__item">
                    <span className="decor__name">Налог 5%:</span>
                    <b className="decor__sum">1074 руб.</b>
                  </li>
                </ul>
                <button className="decor__add" type="button">
                  Оформить заказ
                </button>
              </div>
            </div>

            <div className="basket__order-processed">
              <div className="basket-status__row">
                <img
                  className="basket-status__img"
                  width={120}
                  height={120}
                  src={checkedList}
                  alt=""
                  aria-hidden="true"
                />
                <b className="basket-status__head">Заказ оформлен!</b>
                <p className="basket-status__text">
                  Ваш заказ #<span className="basket-status__number">18</span>
                  cкоро будет передан курьерской доставке
                </p>
              </div>
              <button className="decor__add" type="button">
                Вернуться назад
              </button>
            </div>
          </Fragment>
        ) : (
          <div className="basket__empty">
            <div className="basket-status__row">
              <img
                className="basket-status__img"
                width={120}
                height={120}
                src={box}
                alt=""
                aria-hidden="true"
              />
              <b className="basket-status__head">Корзина пустая</b>
              <p className="basket-status__text">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
            </div>
            <button onClick={onClose} className="decor__add" type="button">
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Drawer;
