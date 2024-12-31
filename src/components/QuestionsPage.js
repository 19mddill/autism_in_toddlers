import React, { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QuestionsPage = () => {
  const navigate = useNavigate();
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
    Age_Years: "",
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
      {
        question:
          "Does your child enjoy playing peek-a-boo or other simple games with you?",
        key: "A1",
      },
      {
        question: "Does your child respond to their name when you call it?",
        key: "A2",
      },
      {
        question:
          "Does your child point to things that interest them, like an airplane in the sky or a picture in a book?",
        key: "A3",
      },
      {
        question: "When you smile at your child, does your child smile back?",
        key: "A4",
      },
      {
        question:
          "Does your child make eye contact with you when talking or playing with you?",
        key: "A5",
      },
      {
        question:
          "If you point at something across the room, does your child look in that direction?",
        key: "A6",
      },
      {
        question:
          "Does your child imitate your actions, such as clapping hands or waving bye-bye?",
        key: "A7",
      },
      {
        question:
          "Does your child show interest in other children, such as watching them or trying to play with them?",
        key: "A8",
      },
      {
        question:
          "Does your child bring objects over to you to show you, not just to get help?",
        key: "A9",
      },
      {
        question:
          "When your child is upset, do they seek comfort from you (e.g., reach out for a hug)?",
        key: "A10_Autism_Spectrum_Quotient",
      },
    ],
    2: [
      {
        question: "Does the child easily join in social activities?",
        key: "Q2_1",
      },
      { question: "Is the child comfortable meeting new people?", key: "Q2_2" },
      { question: "Does the child prefer to play with others?", key: "Q2_3" },
      { question: "Does the child understand others' emotions?", key: "Q2_4" },
      { question: "Does the child show empathy?", key: "Q2_5" },
      { question: "Does the child follow social rules?", key: "Q2_6" },
      { question: "Does the child avoid eye contact?", key: "Q2_7" },
      {
        question: "Does the child show interest in group activities?",
        key: "Q2_8",
      },
      { question: "Does the child respond to praise?", key: "Q2_9" },
      { question: "Does the child make friends easily?", key: "Q2_10" },
    ],
    3: [
      { question: "Does the child babble?", key: "Q3_1" },
      { question: "Does the child smile at faces?", key: "Q3_2" },
      { question: "Does the child respond to sounds?", key: "Q3_3" },
      { question: "Does the child turn toward voices?", key: "Q3_4" },
      {
        question: "Does the child understand simple instructions?",
        key: "Q3_5",
      },
      { question: "Does the child recognize familiar faces?", key: "Q3_6" },
      { question: "Does the child enjoy being cuddled?", key: "Q3_7" },
      {
        question: "Does the child use gestures like waving or pointing?",
        key: "Q3_8",
      },
      { question: "Does the child try to mimic speech sounds?", key: "Q3_9" },
      {
        question: "The child doesn't maintain consistent eye contact?",
        key: "Q3_10",
      },
    ],
    4: [
      {
        question: "Does the child have speech delay?",
        key: "Speech_Delay",
      },
      {
        question: "Does the child have learning difficulties?",
        key: "Learning_disorder",
      },
      {
        question: "Does the child have genetic issues?",
        key: "Genetic_Disorders",
      },
      {
        question: "Is the child suffering from depression?",
        key: "Depression",
      },
      {
        question: "Is the child intellectually disabled?",
        key: "intellectual_disability",
      },
      {
        question: "Does the child have severe behavioral issues?",
        key: "Behavioural_Issues",
      },
      {
        question: "What is the child's age,for example: 7 or 18?",
        key: "Age_Years",
      },
    ],
    5: [
      {
        question: "Does the child suffer from anxiety disorder?",
        key: "Anxiety_disorder",
      },
      {
        question: "What is the sex of the child?",
        key: "Sex",
        options: [
          { label: "Male", value: "M" },
          { label: "Female", value: "F" },
        ],
      },
      {
        question: "What is the ethnicity of the child?",
        key: "Ethnicity",
        options: [
          "White European",
          "Middle Eastern",
          "Hispanic",
          "Black",
          "Asian",
          "South Asian",
          "Native Indian",
          "Others",
          "Latino",
          "Mixed",
          "Pacifica",
        ],
      },
      {
        question: "Does the child suffer from jaundice often?",
        key: "Jaundice",
      },
      {
        question: "Does any family member have autism?",
        key: "Family_mem_with_ASD",
      },
      {
        question:
          "If the subject had an autism problem in toddler time how would you rate it out of 1 to 4?",
        key: "Childhood_Autism_Rating_Scale",
      },
    ],
    6: [
      {
        question: "Who completed this test?",
        key: "Who_completed_the_test",
        options: [
          "Family Member",
          "Health Care Professional",
          "Self",
          "Others",
          "School and NGO",
        ],
      },
    ],
  };

  const calculateSocialResponsivenessScale = (updatedData) => {
    const page2Keys = questions[2].map((item) => item.key);
    return page2Keys.reduce((sum, key) => sum + (updatedData[key] || 0), 0);
  };

  const calculateQchat10Score = (updatedData) => {
    const page3Keys = questions[3].map((item) => item.key);
    return page3Keys.reduce((sum, key) => sum + (updatedData[key] || 0), 0);
  };

  const handleRadioChange = (key, value) => {
    setFormData((prev) => {
      const updatedData = { ...prev, [key]: value };

      if (questions[2].some((item) => item.key === key)) {
        updatedData.Social_Responsiveness_Scale =
          calculateSocialResponsivenessScale(updatedData);
      }

      if (questions[3].some((item) => item.key === key)) {
        updatedData.Qchat_10_Score = calculateQchat10Score(updatedData);
      }

      return updatedData;
    });
  };

  const handleTextChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNextPage = () => setPage((prev) => prev + 1);

  const handlePreviousPage = () => setPage((prev) => prev - 1);

  const handleSubmit = async () => {
    const result = {
      A1: formData.A1 === 1 ? 0 : 1,
      A2: formData.A2 === 1 ? 0 : 1,
      A3: formData.A3 === 1 ? 0 : 1,
      A4: formData.A4 === 1 ? 0 : 1,
      A5: formData.A5 === 1 ? 0 : 1,
      A6: formData.A6 === 1 ? 0 : 1,
      A7: formData.A7 === 1 ? 0 : 1,
      A8: formData.A8 === 1 ? 0 : 1,
      A9: formData.A9 === 1 ? 0 : 1,
      A10_Autism_Spectrum_Quotient:
        formData.A10_Autism_Spectrum_Quotient === 1 ? 0 : 1,
      Social_Responsiveness_Scale: parseFloat(
        formData.Social_Responsiveness_Scale
      ).toFixed(1),
      Age_Years: parseInt(formData.Age_Years),
      Qchat_10_Score: parseFloat(formData.Qchat_10_Score).toFixed(1),
      "Speech Delay/Language Disorder":
        formData.Speech_Delay === 1 ? "Yes" : "No",
      "Learning disorder": formData.Learning_disorder === 1 ? "Yes" : "No",
      Genetic_Disorders: formData.Genetic_Disorders === 1 ? "Yes" : "No",
      Depression: formData.Depression === 1 ? "Yes" : "No",
      "Global developmental delay/intellectual disability":
        formData.intellectual_disability === 1 ? "Yes" : "No",
      "Social/Behavioural Issues":
        formData.Behavioural_Issues === 1 ? "Yes" : "No",
      "Childhood Autism Rating Scale": parseInt(
        formData.Childhood_Autism_Rating_Scale
      ).toFixed(1),
      Anxiety_disorder: formData.Anxiety_disorder === 1 ? "Yes" : "No",
      Sex: formData.Sex,
      Ethnicity: formData.Ethnicity,
      Jaundice: formData.Jaundice === 1 ? "Yes" : "No",
      Family_mem_with_ASD: formData.Family_mem_with_ASD === 1 ? "Yes" : "No",
      Who_completed_the_test: formData.Who_completed_the_test,
    };

    const jsonData = JSON.stringify(result, null, 2);

    try {
      const response = await axios.post(
        "https://autism-in-toddler-backend.onrender.com/predict",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { ASD_traits } = response.data;

      // Redirect to ResultsPage and pass the response
      navigate("/results", { state: { ASD_traits } });
    } catch (error) {
      console.error("Error submitting data:", error);
      alert(error);
    }
  };

  return (
    <DefaultLayout>
      <div className="container mt-5">
        <h2 className="text-center">Assessment Phase {page}</h2>
        <div className="list-group">
          {questions[page]?.map((item, index) => (
            <div key={index} className="list-group-item">
              <p>{item.question || item}</p>
              <div>
                {item.key === "Age_Years" ||
                item.key === "Childhood_Autism_Rating_Scale" ? (
                  <input
                    type="text"
                    className="form-control"
                    value={formData[item.key] || ""}
                    onChange={(e) => handleTextChange(item.key, e.target.value)}
                  />
                ) : item.options ? (
                  item.options.map((option, idx) => (
                    <label key={idx} className="me-3">
                      <input
                        type="radio"
                        name={`page${page}_q${item.key}_${idx}`} // Unique name using key for each page
                        value={option.value || option}
                        checked={
                          formData[item.key] === (option.value || option)
                        }
                        onChange={() =>
                          handleRadioChange(item.key, option.value || option)
                        }
                      />{" "}
                      {option.label || option}
                    </label>
                  ))
                ) : (
                  <>
                    <label className="me-3">
                      <input
                        type="radio"
                        name={`page${page}_q${item.key}_yes`} // Unique name using key for each page
                        value="yes"
                        checked={formData[item.key] === 1}
                        onChange={() => handleRadioChange(item.key, 1)}
                      />{" "}
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`page${page}_q${item.key}_no`} // Unique name using key for each page
                        value="no"
                        checked={formData[item.key] === 0}
                        onChange={() => handleRadioChange(item.key, 0)}
                      />{" "}
                      No
                    </label>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          {page > 1 && (
            <button
              className="btn btn-secondary me-3"
              onClick={handlePreviousPage}
            >
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
