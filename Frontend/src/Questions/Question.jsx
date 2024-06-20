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
      const correct = index === question.correct;
      setIsCorrect(correct);
      setPauseTimer(true);
      setHasClicked(true);

      if (correct) {
        playCorrect(); // Play correct answer sound
        setTimeout(() => {
          handleNext(correct); // Proceed immediately if correct
        }, 4000);
      } else {
        playIncorrect(); // Play incorrect answer sound
        setTimeout(() => {
          handleNext(correct); // Delay before proceeding if incorrect
        }, 4000);
      }
    }
  };

  const handleNext = (isCorrect) => {
    onNextQuestion(isCorrect);
    setSelectedOption(null);
    setIsCorrect(null);
    setHasClicked(false);
    setPauseTimer(false);
  };

  return (
    <div className="w-full md:w-11/12 lg:w-9/12 xl:w-8/12 text-lg text-center mt-2 mb-2 mx-auto">
      <span className="text-2xl bg-slate-50 rounded-full ml-5 p-2 block">{question.question}</span>
      <div className="flex mt-4">
        {/* Displaying options on the left */}
        <div className="w-full md:w-1/2 space-y-1 ml-5 mb-1">
          {question.options.slice(0, 2).map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`w-full py-2 text-xl bg-gray-300 rounded-full cursor-pointer focus:outline-none ${
                selectedOption !== null && selectedOption === index
                  ? isCorrect
                    ? "bg-green-500"
                    : "bg-red-500"
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
        <div className="w-full md:w-1/2 space-y-1 mb-2 ml-5">
          {question.options.slice(2).map((option, index) => (
            <button
              key={index + 2}
              onClick={() => handleOptionClick(index + 2)}
              className={`w-full py-2 text-xl bg-gray-300 rounded-full cursor-pointer focus:outline-none ${
                selectedOption !== null && selectedOption === index + 2
                  ? isCorrect
                    ? "bg-green-500"
                    : "bg-red-500"
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
    </div>
  );
}

export default Question;
