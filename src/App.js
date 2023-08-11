import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';
import { products } from './data';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== product.id)
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
      </header>
      <div className="App-container">
        <ProductList
          products={products}
          cart={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <Cart cart={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
