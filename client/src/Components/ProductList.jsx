import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.url} alt={product.title.shortTitle} />
          <h3>{product.title.shortTitle}</h3>
          <p>{product.title.longTitle}</p>
          <p>Price: ₹{product.price.cost} <span style={{ textDecoration: 'line-through' }}>₹{product.price.mrp}</span></p>
          <p>Discount: {product.price.discount}</p>
          <p>{product.tagline}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
