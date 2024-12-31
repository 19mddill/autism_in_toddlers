import React from "react";
import { useLocation } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

const ResultsPage = () => {
  const location = useLocation();
  const { ASD_traits } = location.state || {};

  const results = ASD_traits
    ? `Your child ${
        ASD_traits === "Yes" ? "is very much in" : "does not"
      } need further evaluation based on the screening responses.`
    : "No data available. Please submit the screening form.";

  return (
    <DefaultLayout>
      <h2 className="text-center">Screening Results</h2>
      <div className="text-center mt-4">
        <p className="lead">{results}</p>
        <p>
          For more detailed information, please consult a healthcare
          professional.
        </p>
      </div>
    </DefaultLayout>
  );
};

export default ResultsPage;
