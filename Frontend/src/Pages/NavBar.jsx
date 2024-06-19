import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // State to keep track of active link
  const [activeLink, setActiveLink] = useState("/");

  // Function to handle click on a link
  const handleClick = (to) => {
    setActiveLink(to);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-400 p-2 flex justify-between items-center z-10">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/GameStart"
            className="text-white text-xl font-bold hover:text-gray-300"
          >
            Online KBC Quiz Game
          </Link>
          <div className="flex items-center space-x-2">
            <NavLink
              to="/GameStart"
              onClick={() => handleClick("/GameStart")}
              active={activeLink === "/GameStart"}
            >
              GameStart
            </NavLink>
            <NavLink
              to="/addquestion"
              onClick={() => handleClick("/addquestion")}
              active={activeLink === "/addquestion"}
            >
              Add Questions
            </NavLink>
            <NavLink
              to="/DeleteQuestion"
              onClick={() => handleClick("/DeleteQuestion")}
              active={activeLink === "/DeleteQuestion"}
            >
              Delete Question
            </NavLink>
            <NavLink
              to="/FetchAllQuestions"
              onClick={() => handleClick("/FetchAllQuestions")}
              active={activeLink === "/FetchAllQuestions"}
            >
              Fetch All Questions
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => handleClick("/about")}
              active={activeLink === "/about"}
            >
              About
            </NavLink>
            <NavLink
              to="/Login"
              onClick={() => handleClick("/Login")}
              active={activeLink === "/Login"}
            >
              Login
            </NavLink>
            <NavLink
              to="/Signup"
              onClick={() => handleClick("/Signup")}
              active={activeLink === "/Signup"}
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom NavLink component to handle active state and styling
const NavLink = ({ to, onClick, active, children }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`btn btn-primary ${
        active ? "bg-white text-black" : "hover:bg-white hover:text-black"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavBar;
