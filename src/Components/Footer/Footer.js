import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid bg-primary p-5 text-light">
      <div className="row">
        <div className="col-md-4">
          <h2>About Us</h2>
          <p className="text-start mx-auto ms-5">
            We aim to ensure that you never miss an opportunity to travel.
          </p>
        </div>
        <div className="col-md-4">
          <h3>Menu</h3>

          <p>
            <Link className="text-decoration-none text-white" to="/home">
              Home
            </Link>
          </p>
          <p>
            <Link className="text-decoration-none text-white" to="/home">
              About Us
            </Link>
          </p>
          <p>
            <Link className="text-decoration-none text-white" to="/home">
              Our Services
            </Link>
          </p>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Footer;
