import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const ResultsPage = () => {
  const results = "Your child might need further evaluation based on the screening responses.";

  return (
    <DefaultLayout>
      <h2 className="text-center">Screening Results</h2>
      <div className="text-center mt-4">
        <p className="lead">{results}</p>
        <p>
          For more detailed information, please consult a healthcare professional.
        </p>
      </div>
    </DefaultLayout>
  );
};

export default ResultsPage;
