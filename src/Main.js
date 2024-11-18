import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import QuestionsPage from "./components/QuestionsPage";
import Dashboard from "./pages/Dashboard";
import ResultsPage from "./pages/ResultsPage";

import HomePage from "./components/HomePage";


class Main extends Component{
render(){
 
    return (
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
    );
} 
}

export default Main;
