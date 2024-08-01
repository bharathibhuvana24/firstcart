// src/components/ProductList.jsx
import React from "react";
import "./ProductList.css";
const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" 
        key={product.title}>
          <img className="product-image" src="https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png" alt={product.title} />
          <h3 className="product-title ">{product.title}</h3>
          <p className="product-price">{product.price}</p>
          <button className="add-to-cart-button "onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
