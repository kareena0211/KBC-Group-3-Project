import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

function FetchAllQuestions() {
  const [questions, setQuestions] = useState([]);
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/Get/All/Questions"
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleDeleteQuestion = async (questionId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/Delete/Question/${questionId}`
      );
      console.log(response.data.message); // Assuming your backend sends a message upon successful deletion
      // Filter out the deleted question from state
      setQuestions(questions.filter((q) => q._id !== questionId));
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setFilterInput(inputValue);
  };

  const displayedQuestions =
    filterInput.length > 0
      ? questions.filter((question) =>
          question.question.toLowerCase().includes(filterInput.toLowerCase())
        )
      : questions;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2 text-center">All Questions</h1>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold mb-3">
          Total Questions : {displayedQuestions.length}
        </p>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-1 mb-1 w-6/12"
          placeholder="Search question by question name..."
          value={filterInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedQuestions.map((question) => (
          <div key={question._id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
            <ul className="space-y-2">
              {question.options.map((option, index) => (
                <li key={index}>
                  {index} : {option}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <p className="mt-2">
                Correct Answer (Index Wise): {question.correct}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="mt-2 text-sm">Category: {question.category}</p>
              <FaTrash
                className="ml-4 text-red-500 text-2xl cursor-pointer"
                onClick={() => handleDeleteQuestion(question._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchAllQuestions;
