import { useState } from 'react';

function Question({ question, onNextQuestion, setPauseTimer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setIsCorrect(index === question.correct);
    setPauseTimer(true); 
  };

  const handleNext = () => {
    onNextQuestion(isCorrect);
  };

  return (
    <div>
      <h2 className="question">{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`option-button ${selectedOption === index ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedOption !== null && (
        <button onClick={handleNext} className="next-button">
          Next
        </button>
      )}
    </div>
  );
}

export default Question;
