import React, { useEffect } from "react";
import "./Home.css";
import Slider from "./Slider";
import tripimg from "../../img/tripimg.png";
import g1 from "../../img/g1.jpg";
import g2 from "../../img/g2.jpg";
import g3 from "../../img/g3.jpg";
import { useState } from "react";
import Service from "../Service/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `https://calm-forest-62099.herokuapp.com/services`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {/* Hero section */}
      <div className="hero-secrion">
        <Slider></Slider>
        {/* Trip plan */}
        <div className="container  mt-5 mb-5">
          <div className="row">
            <div className="col-md-6">
              <img src={tripimg} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6 mt-5">
              <h2 className="trip-head">
                Plan Your Trip with{" "}
                <span className="text-warning">FriendsTour & Travels</span>
              </h2>
              <p className="ms-5 mt-4">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected hum
                randomised words which don't look even slightly.
              </p>
              <ul className="plan">
                <li className="text-start ms-5 fw-bold mt-5 mb-3">
                  <i className="fas fa-check-circle text-danger "></i> Invest in
                  your simply neighborhood
                </li>
                <li className="text-start ms-5 fw-bold mt-3 mb-3">
                  <i className="fas fa-check-circle text-danger "></i> Invest in
                  Support people in free text extreme need
                </li>
                <li className="text-start ms-5 fw-bold mt-3 mb-3">
                  <i className="fas fa-check-circle text-danger "></i> Invest in
                  Largest global industrial business community
                </li>
              </ul>
              <button className="btn btn-danger btn-lg booknow-btn mt-4">
                Book Now
              </button>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="container">
          <h2 className="trip-head mt-5 mb-5">Most Popular Tours</h2>
          {services.length === 0 ? (
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className="row">
              {services.map((service) => (
                <Service key={service._id} service={service}></Service>
              ))}
            </div>
          )}
        </div>

        {/* review section */}
        <div className="container mt-5 mb-5 ">
          <h2 className="trip-head mb-5">
            What They’re <span className="text-warning">Saying</span>
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card" style={{ width: "22rem" }}>
                <div className="rounded-circle">
                  <img
                    src={g1}
                    className="card-img-top"
                    height="230rem"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                  </h5>
                  <p className="card-text">
                    This is due to their best service, pricing and customer
                    support. It’s throughly refresing to such a personal touch.
                    Duis aute irure lupsum reprehenderit.
                  </p>
                  <h4 className="fw-bold">Juliya</h4>
                  <p className="text-danger">CUSTOMER</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: "22rem" }}>
                <div className="rounded-circle">
                  <img
                    src={g2}
                    className="card-img-top "
                    height="230rem"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                  </h5>
                  <p className="card-text">
                    This is due to their best service, pricing and customer
                    support. It’s throughly refresing to such a personal touch.
                    Duis aute irure lupsum reprehenderit.
                  </p>
                  <h4 className="fw-bold">ALia & Kallan</h4>
                  <p className="text-danger">CUSTOMER</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: "22rem" }}>
                <div className="rounded-circle">
                  <img
                    src={g3}
                    className="card-img-top "
                    height="230rem"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                  </h5>
                  <p className="card-text">
                    This is due to their best service, pricing and customer
                    support. It’s throughly refresing to such a personal touch.
                    Duis aute irure lupsum reprehenderit.
                  </p>
                  <h4 className="fw-bold">Somana & Harba</h4>
                  <p className="text-danger">CUSTOMER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
