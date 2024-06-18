import React from "react";
import {
  FaUserAlt,
  FaGamepad,
  FaQuestionCircle,
  FaLifeRing,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-5">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About KBC Game
          </h1>
          <FaGamepad className="text-4xl text-blue-500" />
        </div>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to the KBC Game! Test your knowledge with 80 challenging
          questions where 20 random questions will be presented to you one by
          one. For every correct answer, the option will turn green, and your
          amount will increase. Other options will be disabled. If you select a
          wrong answer, it will turn red, the accumulated amount will be shown,
          and the game will stop with that amount.
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
              <FaUserAlt className="mr-2 text-blue-500" /> User Features
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Register an account and play</li>
              <li>Play without login</li>
            </ul>
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
              <FaQuestionCircle className="mr-2 text-blue-500" /> Lifelines
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>50-50: Two incorrect options will be disabled</li>
              <li>Phone a Friend: Join a Google Meet call</li>
              <li>Switch a Question: Skip the current question</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className=" flex justify-center items-center sm:w-2/3 lg:w-1/2">
            <img
              src="https://lh3.googleusercontent.com/couUyzjpRp-J5YOaSV31i4OfktSulw5HRP5rwfnZdCsiEbrKudPFXhqcUumOBxh-3w"
              alt="KBC Game"
              className="w-[50%] rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
