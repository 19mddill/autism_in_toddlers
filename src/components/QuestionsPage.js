import React, { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const QuestionsPage = () => {
  const [answers, setAnswers] = useState({});
  const questions = [
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
  ];

  const handleAnswer = (index, answer) => {
    setAnswers({ ...answers, [index]: answer });
  };

  const handleSubmit = () => {
    alert("Submitted answers: " + JSON.stringify(answers));
  };

  return (
    <DefaultLayout>
      <h2 className="text-center">Autism Screening Questions</h2>
      <div className="list-group mt-4">
        {questions.map((question, index) => (
          <div key={index} className="list-group-item">
            <p>{question}</p>
            <div>
              <button
                className={`btn me-2 ${answers[index] === "Yes" ? "btn-success active" : "btn-outline-success"}`}
                onClick={() => handleAnswer(index, "Yes")}
              >
                Yes
              </button>
              <button
                className={`btn ${answers[index] === "No" ? "btn-danger active" : "btn-outline-danger"}`}
                onClick={() => handleAnswer(index, "No")}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-4" onClick={handleSubmit}>
        Submit
      </button>
    </DefaultLayout>
  );
};

export default QuestionsPage;
