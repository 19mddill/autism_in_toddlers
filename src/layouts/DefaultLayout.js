import React from "react";
import { Link } from "react-router-dom";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h4 mb-0">Autism Screening App</h1>
          <nav>
            <Link to="/autism_in_toddlers/" className="text-white me-3 text-decoration-none">Dashboard</Link>
            <Link to="/autism_in_toddlers/questions" className="text-white me-3 text-decoration-none">Questions</Link>
            <Link to="/autism_in_toddlers/results" className="text-white me-3 text-decoration-none">Results</Link>
            <Link to="/autism_in_toddlers/contact-us" className="text-white text-decoration-none">Contact Us</Link>
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
            Need help? <Link to="/autism_in_toddlers/contact-us" className="text-light text-decoration-underline">Contact Us</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DefaultLayout;