// src/App.jsx
import React, { useState } from "react";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.title !== productToRemove.title)
    );
  };

  
    const products= [
      {
          image: "https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png",
          title: "Nike Shoes",
          price: "$50.00"
      },
      {
          image: "https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png",
          title: "Adidas Shoes",
          price: "$60.00"
      },
      {
          image: "https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png",
          title: "Puma Shoes",
          price: "$70.00"
      },
      {
          image: "https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png",
          title: "Bata Shoes",
          price: "$50.00"
      },
      {
          image: "https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png",
          title: "Crocs Shoes",
          price: "$60.00"
      },
      {
          image: "https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png",
          title: "Sparx Shoes",
          price: "$70.00"
      },    
      {
          image: "https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png",
          title: "Reebok Shoes",
          price: "$50.00"
      },
      {
          image: "https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png",
          title: "Fila Shoes",
          price: "$60.00"
      },
      {
          image: "https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png",
          title: "Lacoste Shoes",
          price: "$70.00"
      }  
  ];

  return (
    <div className="app">
       <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <ProductList products={products} addToCart={addToCart} />
     
    </div>
  );
};

export default App;
