import React, { useState } from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, img, short_des, _id } = props.service;

  const handleService = (_id) => {
    console.log(_id);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: "22rem" }}>
        <img src={img} className="card-img-top" height="250rem" alt="..." />
        <div className="card-body" style={{ height: "12rem" }}>
          <h5 className="card-title">{name.slice(0, 20)}....</h5>
          <p className="card-text">{short_des.slice(0, 60)}....</p>
          <Link
            className="text-decoration-none text-white"
            to={`/booknow/${_id}`}
          >
            <button
              onClick={() => handleService(_id)}
              className="btn btn-warning"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
