import { useState } from "react";
import Quiz from "./Quiz/Quiz";
import questionsData from "./questions.json";
import "./index.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
