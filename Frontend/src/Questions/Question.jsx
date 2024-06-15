import { useState } from "react";

function Question({ question, onNextQuestion, setPauseTimer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [hasClicked, setHasClicked] = useState(false);

  const handleOptionClick = (index) => {

    if (!hasClicked) {
      setSelectedOption(index);
      setIsCorrect(index === question.correct);
      setPauseTimer(true);
      setHasClicked(true);
    }
    setSelectedOption(index);
    setIsCorrect(index === question.correct);
    setPauseTimer(true);

  };

  const handleNext = () => {
    onNextQuestion(isCorrect);
    setSelectedOption(null);
    setIsCorrect(null);
    setHasClicked(false);
    setPauseTimer(false); 
  };

  return (
    <div>
      <h2 className="text-2xl mb-5">{question.question}</h2>
      <div className="flex flex-col gap-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}

            className={`option-button ${selectedOption === index ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
            disabled={hasClicked} 

            className={`p-2 text-lg bg-gray-300 rounded cursor-pointer ${
              selectedOption === index
                ? isCorrect
                  ? "bg-green-500"
                  : "bg-red-500"
                : ""
            }`}

          >
            {option}
          </button>
        ))}
      </div>
      {selectedOption !== null && (
        <button
          onClick={handleNext}
          className="mt-5 px-5 py-2 text-lg text-white bg-pink-600 rounded cursor-pointer"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Question;
