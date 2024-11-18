import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Autism Screening App</h1>
      <p>
        This app helps parents assess potential signs of autism in their children.
        Answer a few simple questions to get started.
      </p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/questions">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Start Screening</button>
        </Link>
        <Link to="/results">
          <button style={{ margin: "10px", padding: "10px 20px" }}>View Results</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
