import React, { useState } from "react";
import useSound from 'use-sound';
import correctSound from '../Sounds/correct.mp3';
import incorrectSound from '../Sounds/wrong.mp3';

function Question({ question, onNextQuestion, setPauseTimer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [hasClicked, setHasClicked] = useState(false);
  const [playCorrect] = useSound(correctSound);
  const [playIncorrect] = useSound(incorrectSound);

  const handleOptionClick = (index) => {
    if (!hasClicked) {
      setSelectedOption(index);
      const correct = index === question.correct;
      setIsCorrect(correct);
      setPauseTimer(true);
      setHasClicked(true);

      if (correct) {
        playCorrect();
        setTimeout(() => {
          handleNext(correct);
        }, 4000);
      } else {
        playIncorrect();
        setTimeout(() => {
          handleNext(correct);
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

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="w-full md:w-11/12 lg:w-9/12 xl:w-8/12 text-lg text-center mt-2 mb-2 mx-auto">
      <span className="text-2xl bg-slate-50 rounded-full mb-3 ml-5 p-2 block">{question.question}</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
        {optionLabels.map((label, index) => (
          <div key={index} className="space-y-1 ml-5">
            <button
              onClick={() => handleOptionClick(index)}
              className={`w-full py-2 text-xl bg-gray-300 rounded-full cursor-pointer focus:outline-none ${selectedOption !== null && selectedOption === index
                ? isCorrect
                  ? "bg-green-500"
                  : "bg-red-500"
                : selectedOption !== null && question.correct === index
                  ? "bg-green-500"
                  : ""
                }`}
              disabled={hasClicked}
            >
              {label}. {question.options[index]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
