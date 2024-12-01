import React, { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const QuestionsPage = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    A1: null,
    A2: null,
    A3: null,
    A4: null,
    A5: null,
    A6: null,
    A7: null,
    A8: null,
    A9: null,
    A10_Autism_Spectrum_Quotient: null,
    Social_Responsiveness_Scale: 0,
    Age_Years: null,
    Qchat_10_Score: 0,
    Speech_Delay: null,
    Learning_disorder: null,
    Genetic_Disorders: null,
    Depression: null,
    intellectual_disability: null,
    Behavioural_Issues: null,
    Childhood_Autism_Rating_Scale: 0,
    Anxiety_disorder: null,
    Sex: null,
    Ethnicity: null,
    Jaundice: null,
    Family_mem_with_ASD: null,
    Who_completed_the_test: null,
  });

  const questions = {
    1: [
      "Does your child enjoy playing peek-a-boo or other simple games with you?",
      "Does your child respond to their name when you call it?",
      "Does your child point to things that interest them, like an airplane in the sky or a picture in a book?",
      "When you smile at your child, does your child smile back?",
      "Does your child make eye contact with you when talking or playing with you?",
      "If you point at something across the room, does your child look in that direction?",
      "Does your child imitate your actions, such as clapping hands or waving bye-bye?",
      "Does your child show interest in other children, such as watching them or trying to play with them?",
      "Does your child bring objects over to you to show you, not just to get help?",
      "When your child is upset, do they seek comfort from you (e.g., reach out for a hug)?",
    ],
    2: [
      "Does the child easily join in social activities?",
      "Is the child comfortable meeting new people?",
      "Does the child prefer to play alone?",
      "Does the child understand others' emotions?",
      "Does the child show empathy?",
      "Does the child follow social rules?",
      "Does the child avoid eye contact?",
      "Does the child show interest in group activities?",
      "Does the child respond to praise?",
      "Does the child make friends easily?",
    ],
    3: [
      "What is the age of the child (in years)?",
      "Does the child babble?",
      "Does the child smile at faces?",
      "Does the child respond to sounds?",
      "Does the child turn toward voices?",
      "Does the child understand simple instructions?",
      "Does the child recognize familiar faces?",
      "Does the child enjoy being cuddled?",
      "Does the child use gestures like waving or pointing?",
      "Does the child try to mimic speech sounds?",
      "Does the child maintain consistent eye contact?",
    ],
    4: [
      "Does the child have speech delay?",
      "Does the child have learning difficulties?",
      "Does the child have genetic issues?",
      "Is the child suffering from depression?",
      "Is the child intellectually disabled?",
      "Does the child have severe behavioral issues?",
      "Does the child have difficulty in daily communication?",
      "Is the child easily frustrated?",
      "Does the child avoid physical activities?",
      "Does the child have frequent meltdowns?",
    ],
    5: [
      "Does the child suffer from anxiety disorder?",
      "What is the sex of the child?",
      "What is the ethnicity of the child?",
      "Does the child suffer from jaundice often?",
      "Does any family member have autism?",
    ],
    6: [
      "Who completed this test?",
    ],
  };

  const handleRadioChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePreviousPage = () => setPage((prev) => prev - 1);

  const handleSubmit = () => {
    fetch("YOUR_BACKEND_API_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => alert("Data submitted successfully"))
      .catch(() => alert("Error while submitting data"));
  };

  return (
    <DefaultLayout>
    <div className="container mt-5">
      <h2 className="text-center">Page {page}</h2>
      <div className="list-group">
        {questions[page]?.map((question, index) => (
          <div key={index} className="list-group-item">
            <p>{question}</p>
            {page === 3 && index === 0 ? (
              <input
                type="number"
                className="form-control"
                placeholder="Enter age in years"
                onChange={(e) =>
                  handleRadioChange("Age_Years", parseInt(e.target.value))
                }
              />
            ) : (
              <div>
                <label className="me-3">
                  <input
                    type="radio"
                    name={`page${page}_q${index}`}
                    value="Yes"
                    onChange={() =>
                      handleRadioChange(`Q${page}_${index + 1}`, "Yes")
                    }
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name={`page${page}_q${index}`}
                    value="No"
                    onChange={() =>
                      handleRadioChange(`Q${page}_${index + 1}`, "No")
                    }
                  />{" "}
                  No
                </label>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        {page > 1 && (
          <button className="btn btn-secondary me-3" onClick={handlePreviousPage}>
            Back
          </button>
        )}
        {page < Object.keys(questions).length ? (
          <button className="btn btn-primary" onClick={handleNextPage}>
            Next
          </button>
        ) : (
          <button className="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
      
      </DefaultLayout>
  );
};

export default QuestionsPage;
