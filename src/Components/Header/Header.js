import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container-fluid p-2">
          <Link
            className="text-decoration-none fw-bold text-white ms-5"
            to="/home"
          >
            FriendsTour & Travels
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {user?.email ? (
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item me-5 ">
                    <Link
                      className="text-decoration-none text-white"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item me-5 ">
                    <Link
                      className="text-decoration-none text-white"
                      to="/myorders"
                    >
                      My Orders
                    </Link>
                  </li>
                  <li className="nav-item me-5 ">
                    <Link
                      className="text-decoration-none text-white"
                      to="/manageorders"
                    >
                      Manage All Orders
                    </Link>
                  </li>
                  <li className="nav-item me-5 ">
                    <Link
                      className="text-decoration-none text-white"
                      to="/addservice"
                    >
                      Add Service
                    </Link>
                  </li>
                </ul>
              ) : (
                <div>
                  <li className="nav-item me-5 ">
                    <Link
                      className="text-decoration-none text-white"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>
                </div>
              )}
            </ul>
            <div className="d-flex me-5">
              <div>
                {user?.email ? (
                  <div>
                    <span className="text-white me-3 mt-2">
                      {user.displayName}
                    </span>
                    <button
                      onClick={logOut}
                      className="btn btn-outline-primary"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div>
                    <Link to="/login">
                      <button
                        className="btn btn-outline-success me-2"
                        type="submit"
                      >
                        Login
                      </button>
                    </Link>
                    <Link to="/registration">
                      <button className="btn btn-outline-warning" type="submit">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
