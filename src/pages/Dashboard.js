import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const Dashboard = () => {
  const userName = "Parent";

  return (
    <DefaultLayout>
      <div className="text-center">
        <h1 className="mb-4">Welcome, {userName}!</h1>
        <p className="lead">
          Explore autism screening tools and resources to support you and your child.
        </p>
        <div className="d-flex justify-content-center mt-4">
          <a href="/questions" className="btn btn-primary mx-2">Take Screening Test</a>
          <a href="/results" className="btn btn-secondary mx-2">View Results</a>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
