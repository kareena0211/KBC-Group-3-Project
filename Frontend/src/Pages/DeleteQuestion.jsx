import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const DeleteQuestion = () => {
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/Delete/Question/name', {
        data: {
          question: question,
        },
      });
      if (response.status === 200) {
        toast.success('Question deleted successfully!');
        setTimeout(() => {
          navigate('/FetchAllQuestions'); // Adjust this path to your 'all questions' route
        }, 3000); // Redirect after 3 seconds to allow the toast to be visible
      } else {
        toast.error('Failed to delete the question.');
      }
    } catch (error) {
      console.error('Error deleting question:', error);
      toast.error('An error occurred while deleting the question.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Delete Question By Question Name</h1>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows="4"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter the question to delete"
        />
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          onClick={handleDelete}
        >
          Delete Question
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DeleteQuestion;
