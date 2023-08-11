// CartItem.js
import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <button onClick={() => onRemove(item)}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CartItem;
