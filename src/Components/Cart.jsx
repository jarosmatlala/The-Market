import React, { useState } from 'react';
import CartItem from './CartItem';
import './Cart.css';
import PayPalButton from './PayPal';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);


  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} onRemove={removeItemFromCart} />
        ))
      )}
      <p>Total: R {totalAmount.toFixed(2)}</p>
      <PayPalButton />
    </div>
  );
};

export default Cart;
