import React from 'react';

const Product = ({ product, cart, addToCart, removeFromCart }) => {
  const inCart = cart.some((item) => item.id === product.id);

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {inCart ? (
        <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
