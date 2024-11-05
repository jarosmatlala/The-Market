import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} onRemove={removeItemFromCart} />
      ))}
      <p>Total: R {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
    </div>
  );
};

export default Cart;
