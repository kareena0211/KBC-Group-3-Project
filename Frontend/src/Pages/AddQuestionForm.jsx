import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const AddQuestionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    question: "",
    options: ["", "", "", ""],
    correctOption: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...formData.options];
    updatedOptions[index] = value;
    setFormData({ ...formData, options: updatedOptions });
  };

  const handleCorrectOptionChange = (index) => {
    setFormData({ ...formData, correctOption: index });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend person will Add  logic to submit the form data (e.g., send to server or store locally)

    console.log("Form data:", formData);
    setFormData({
      name: "",
      question: "",
      options: ["", "", "", ""],
      correctOption: 0,
    });

    // Clearing form fields after submission , so that , user not need to clean that
  };

  return (
    <div className="bg-slate-300 p-10">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
          <FaQuestionCircle className="mr-2 text-blue-500" />
          Add Question
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Admin Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="question"
              className="block text-sm font-medium text-gray-700"
            >
              Question
            </label>
            <textarea
              id="question"
              name="question"
              value={formData.question}
              onChange={handleInputChange}
              placeholder="Enter the question"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Options
            </label>
            {formData.options.map((option, index) => (
              <div key={index} className="flex items-center mt-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
                  required
                />
                <input
                  type="radio"
                  name="correctOption"
                  value={index}
                  checked={formData.correctOption === index}
                  onChange={() => handleCorrectOptionChange(index)}
                  className="ml-4"
                />
                <span className="ml-2 text-sm text-gray-700">Correct</span>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg cursor-pointer hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuestionForm;
