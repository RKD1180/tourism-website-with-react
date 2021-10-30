import React, { useState } from "react";

const Allorders = (props) => {
  let [state, setState] = useState({});
  const { order, _id, status } = props.order;
  const handleCancle = (id) => {
    console.log(id);
    const confirmCancle = window.confirm("Are You Sure..");
    if (confirmCancle) {
      const url = `https://calm-forest-62099.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Your Order Cancel Successfully.");
          }
        });
    }
  };

  const handleStatus = (id) => {
    state = { status: "Approve" };
    const status = { status: "Approve" };
    setState(status);
    const url = `https://calm-forest-62099.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Status Chnage Successfully.");
        }
      });
    console.log(status);
  };

  return (
    <div className=" col-md-9 align-items-center">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={order.serviceImg}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{order.serviceName}</h5>
              <div>
                <button
                  onClick={() => handleStatus(_id)}
                  className="btn btn-warning mt-3"
                >
                  {status}
                </button>
                <button
                  onClick={() => handleCancle(_id)}
                  className="btn btn-danger mt-3 ms-3"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allorders;
