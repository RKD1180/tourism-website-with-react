import React, { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const url = `https://calm-forest-62099.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const order = orders.filter((order) => order.email === user.email);

  return (
    <div>
      <div className="container mt-5 mb-5">
        <h2 className="mt-5 mb-5">Your Booking </h2>
        {orders.length === 0 ? (
          <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="row">
            {order.map((order) => (
              <MyOrder key={order._id} order={order}></MyOrder>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
