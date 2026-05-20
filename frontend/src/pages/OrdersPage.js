import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/orders/').then(res => setOrders(res.data.results || res.data));
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map(o => <li key={o.id}>{o.order_number} - ${o.total_amount}</li>)}
      </ul>
    </div>
  );
}

export default OrdersPage;