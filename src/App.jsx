import { useState } from "react";
// import Quiz from "./components/Quiz";
// import questionsData from "./questions.json";
import "./index.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [start, setStart] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {/* 
// <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    //   {!start ? (
    //     <button
    //       onClick={() => setStart(true)}
    //       className="px-6 py-3 text-lg font-bold text-white bg-pink-500 rounded cursor-pointer"
    //     >
    //       Start KBC Game
    //     </button>
    //   ) : (
    //     <Quiz questions={questionsData} />
    //   )}
    // </div>

    // ---------------------------------------------------------------- */}

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
