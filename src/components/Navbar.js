import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/autism_in_toddlers/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Autism Screening</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/questions">Questions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/results">Results</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
