import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav bg-dark p-2 flex justify-between items-center">
      <Link
        to="/GameStart"
        className="left"
        style={{ textDecoration: "none", color: "white" }}
      >
        <h2>Online KBC Quiz Game</h2>
      </Link>
      <div className="right flex items-center">
        <Link to="/GameStart" className="btn btn-info mx-2">
          GameStart
        </Link>{" "}
        <Link to="/about" className="btn btn-warning mx-2">
          About
        </Link>

        <Link to="/addquestion" className="btn btn-primary mx-2">
          Add Questions Here
        </Link>
        <Link to="/FetchAllQuestions" className="btn btn-primary mx-2">
          Fetch All Questions
        </Link>
        <Link to="/DeleteQuestion" className="btn btn-primary mx-2">
          Delete Question
        </Link>
        <Link to="/Login" className="btn btn-primary mx-2">
          Login
        </Link>
        <Link to="/Signup" className="btn btn-warning mx-2">
          Register
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
