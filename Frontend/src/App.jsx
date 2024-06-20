import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NavBar from "./Pages/NavBar";
import GameStart from "./Pages/GameStart";
import About from "./Pages/About";
import AddQuestionForm from "./Pages/AddQuestionForm";
import FetchAllQuestions from "./Pages/FetchAllQuestions";

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
        <Route path="/GameStart" element={<GameStart />} />
        <Route path="/about" element={<About />} />
        <Route path="/addquestion" element={<AddQuestionForm />} />
        <Route path="/FetchAllQuestions" element={<FetchAllQuestions />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/"
          element={firstVisit ? <Navigate to="/Signup" /> : <GameStart />}
        />
      </Routes>
    </Router>
  );
}

export default App;
