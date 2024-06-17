import { useState } from "react";
import "./index.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      {/* // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
    // </div> */}
      {/* // ---------------------------------------------------------------- */}

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
