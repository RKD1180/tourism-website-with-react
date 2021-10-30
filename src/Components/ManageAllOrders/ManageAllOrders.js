import React, { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import Allorders from "../AllOrders/Allorders";

const ManageAllOrders = () => {
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

  return (
    <div>
      <div className="container mt-5 mb-5 ">
        <h2 className="mb-4">All Orders</h2>
        {orders.length === 0 ? (
          <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="row">
            {orders.map((order) => (
              <Allorders key={order._id} order={order}></Allorders>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageAllOrders;
