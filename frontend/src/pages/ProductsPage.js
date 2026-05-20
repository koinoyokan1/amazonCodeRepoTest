import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/').then(res => setProducts(res.data.results || res.data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(p => <li key={p.id}>{p.name} - ${p.price}</li>)}
      </ul>
    </div>
  );
}

export default ProductsPage;