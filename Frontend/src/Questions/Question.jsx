import React, { useState } from "react";
import useSound from 'use-sound';
import correctSound from '../Sounds/correct.mp3'; // Adjust the path to your correct sound file
import incorrectSound from '../Sounds/wrong.mp3'; // Adjust the path to your incorrect sound file

function Question({ question, onNextQuestion, setPauseTimer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [hasClicked, setHasClicked] = useState(false);
  const [playCorrect] = useSound(correctSound); // Initialize correct answer sound
  const [playIncorrect] = useSound(incorrectSound); // Initialize incorrect answer sound

  const handleOptionClick = (index) => {
    if (!hasClicked) {
      setSelectedOption(index);
      setIsCorrect(index === question.correct);
      setPauseTimer(true);
      setHasClicked(true);

      if (index === question.correct) {
        playCorrect(); // Play correct answer sound
      } else {
        playIncorrect(); // Play incorrect answer sound
      }
    }
  };

  const handleNext = () => {
    onNextQuestion(isCorrect);
    setSelectedOption(null);
    setIsCorrect(null);
    setHasClicked(false);
    setPauseTimer(false);
  };

  return (
    <div className="w-11/12 text-lg text-center mt-4">
      <span className="text-2xl bg-slate-50 rounded-full p-2">{question.question}</span>
      <div className="flex flex-wrap mt-4">
        {/* Displaying options on the left */}
        <div className="w-full md:w-1/2 space-y-5">
          {question.options.slice(0, 2).map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`w-full py-2 text-lg bg-gray-300 rounded-full cursor-pointer focus:outline-none ${
                selectedOption !== null && selectedOption === index
                  ? isCorrect
                    ? "bg-green-500"
                    : "bg-red-500"

                    // when i select wrong answer . show correct option
                  : selectedOption !== null && question.correct === index
                  ? "bg-green-500"
                  : ""
              }`}
              disabled={hasClicked}
            >
              {option}
            </button>
          ))}
        </div>
        
        {/* Displaying options on the right */}
        <div className="w-full md:w-1/2 space-y-5 mb-3">
          {question.options.slice(2).map((option, index) => (
            <button
              key={index + 2} 
              onClick={() => handleOptionClick(index + 2)}
              className={`w-full py-2 text-lg bg-gray-300 rounded-full cursor-pointer focus:outline-none ${
                selectedOption !== null && selectedOption === index + 2
                  ? isCorrect
                    ? "bg-green-500"
                    : "bg-red-500"
                    
                    // when i select wrong answer . show correct option
                  : selectedOption !== null && question.correct === index + 2
                  ? "bg-green-500"
                  : ""
              }`}
              disabled={hasClicked}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      {selectedOption !== null && (
        <button
          onClick={handleNext}
          className="w-full mt-4 mb-3 py-2 text-lg text-white bg-pink-600 rounded cursor-pointer focus:outline-none"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Question;
