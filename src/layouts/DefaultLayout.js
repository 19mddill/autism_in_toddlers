import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const DefaultLayout = ({ children }) => {
  return (
    <div>
        
    <Navbar />
      {/* Header */}
      <header className="bg-primary text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h4 mb-0">Autism Screening App</h1>
          <nav>
            <Link to="/" className="text-white me-3 text-decoration-none">Dashboard</Link>
            <Link to="/questions" className="text-white me-3 text-decoration-none">Questions</Link>
            <Link to="/results" className="text-white me-3 text-decoration-none">Results</Link>
            <Link to="/contact-us" className="text-white text-decoration-none">Contact Us</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mt-4">{children}</main>

      {/* Footer */}
      <footer className="bg-dark text-light py-3 mt-5">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Autism Screening App. All Rights Reserved.</p>
          <p>
            Need help? <Link to="/contact-us" className="text-light text-decoration-underline">Contact Us</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DefaultLayout;
