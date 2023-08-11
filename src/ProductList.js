import React from 'react';
import Product from './Product';

const ProductList = ({ products, cart, addToCart, removeFromCart }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
