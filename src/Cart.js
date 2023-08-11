import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const cartTotal = cart.length;

  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Total Items: {cartTotal}</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

