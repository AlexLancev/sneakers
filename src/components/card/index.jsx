import React from 'react';

import favorites from '../../assets/img/favorites.svg'

function Card( { id, title, price, imageUrl, onPlus } ) {
   const [isAdded, setIsAdded] = React.useState(false);
   
   function handle() {
      onPlus( { id, title, price, imageUrl } );
      setIsAdded(!isAdded);
   }

   return (
      <li className="sneakers__product">
         <button className="sneakers__favorites-btn" type="button">
            <img className="sneakers__favorites" width={32} height={32} src={favorites} alt="" aria-hidden="true" />
         </button>
         <img className="sneakers__img" width={133} height={112} src={imageUrl} alt={title} />
         <h3 className="sneakers__name">{title}</h3>
         <div className="sneakers__row-price">
            <div className="sneakers__cell-price">
               <span className="sneakers__price">Цена:</span>
               <b className="sneakers__sum">{price} руб.</b>
            </div>
            <button className="sneakers__add" type='button'>
               <img className="sneakers__add-img" width={32} height={32} 
                  onClick={handle} src={isAdded ? "/img/checked-green.svg" : "/img/product-add.svg"} alt="" aria-hidden="true" />
            </button>
         </div>
      </li>
   )
}

export default Card;