import { useState } from "react";
import "./index.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import AddQuestionForm from "./Pages/AddQuestionForm";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/addquestion" element={<AddQuestionForm />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
