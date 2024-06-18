import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchAllQuestions() {
  const [questions, setQuestions] = useState([]);
  console.log('Fetch all question from database :- ',questions);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Get/All/Questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">All Questions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {questions.map((question) => (
          <div key={question._id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
            <ul className="space-y-2">
              {question.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
            <p className="mt-2">Correct Answer( Index Wise ) : {question.correct}</p>
            <p className="mt-2 text-sm">Category : {question.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchAllQuestions;
