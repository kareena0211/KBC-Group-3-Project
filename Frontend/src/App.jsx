import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";

function App() {
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    // Check local storage or cookies to determine if user has visited before
    const visitedBefore = localStorage.getItem("visitedBefore");
    if (visitedBefore) {
      setFirstVisit(false);
    } else {
      localStorage.setItem("visitedBefore", "true");
    }
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" element={firstVisit ? <Navigate to="/Signup" /> : <Home />} />
      </Routes>
    </Router>
  );
}

export default App;
