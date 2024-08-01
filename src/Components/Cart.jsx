// src/components/Cart.jsx
import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart }) =>{
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.title}>
            {item.title} ({item.price})
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
