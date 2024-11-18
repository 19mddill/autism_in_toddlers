import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import QuestionsPage from "./components/QuestionsPage";
import Dashboard from "./pages/Dashboard";
import ResultsPage from "./pages/ResultsPage";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/autism_in_toddlers/" element={<HomePage />} />
        <Route path="/autism_in_toddlers/login" element={<Login />} />
        <Route path="/autism_in_toddlers/register" element={<Register />} />
        <Route path="/autism_in_toddlers/contact-us" element={<ContactUs />} />
        <Route path="/autism_in_toddlers/questions" element={<QuestionsPage />} />
        <Route path="/autism_in_toddlers/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
