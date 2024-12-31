import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

const HomePage = () => {
  return (
    <DefaultLayout>
      {/* Carousel */}
      <div
        id="autisticCarousel"
        className="carousel slide mb-4"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://raw.githubusercontent.com/19mddill/NODEJSUDEMY/refs/heads/main/a.jpg"
              className="d-block w-100"
              alt="Autistic child 1"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://raw.githubusercontent.com/19mddill/NODEJSUDEMY/refs/heads/main/b.jpg"
              className="d-block w-100"
              alt="Autistic child 2"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://raw.githubusercontent.com/19mddill/NODEJSUDEMY/refs/heads/main/c.jpg"
              className="d-block w-100"
              alt="Autistic child 3"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#autisticCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#autisticCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Main Content */}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to the Autism Screening App</h1>
        <p>
          This app helps parents assess potential signs of autism in their
          children. Answer a few simple questions to get started.
        </p>
        <div style={{ marginTop: "20px" }}>
          <Link to="/questions">
            <button style={{ margin: "10px", padding: "10px 20px" }}>
              Start Screening
            </button>
          </Link>
          <Link to="/results">
            <button style={{ margin: "10px", padding: "10px 20px" }}>
              View Results
            </button>
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
